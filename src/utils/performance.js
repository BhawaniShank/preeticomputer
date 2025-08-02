import React from 'react';

// Performance optimization utilities

// Lazy loading utility for images
export const lazyLoadImage = (imgElement, src) => {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = src;
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });

    imageObserver.observe(imgElement);
  } else {
    // Fallback for older browsers
    imgElement.src = src;
  }
};

// Debounce function for performance
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Throttle function for performance
export const throttle = (func, limit) => {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Performance monitoring
export const measurePerformance = (name, fn) => {
  const start = performance.now();
  const result = fn();
  const end = performance.now();
  console.log(`${name} took ${end - start} milliseconds`);
  return result;
};

// Image optimization helper
export const optimizeImage = (src, width = 800, quality = 80) => {
  // For now, return the original src
  // In production, you might want to use a CDN or image optimization service
  return src;
};

// Preload critical resources
export const preloadResource = (href, as = 'fetch') => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = href;
  link.as = as;
  document.head.appendChild(link);
};

// Memory management for large lists
export const createVirtualScroller = (items, itemHeight, containerHeight) => {
  const visibleItems = Math.ceil(containerHeight / itemHeight);
  const totalHeight = items.length * itemHeight;
  
  return {
    getVisibleRange: (scrollTop) => {
      const start = Math.floor(scrollTop / itemHeight);
      const end = Math.min(start + visibleItems, items.length);
      return { start, end, items: items.slice(start, end) };
    },
    totalHeight
  };
};

// Component performance wrapper
export const withPerformanceTracking = (Component, componentName) => {
  return function PerformanceTrackedComponent(props) {
    const startTime = performance.now();
    
    React.useEffect(() => {
      const endTime = performance.now();
      console.log(`${componentName} render time: ${endTime - startTime}ms`);
    });
    
    return <Component {...props} />;
  };
};

// Bundle size optimization helper
export const dynamicImport = (importFn, fallback = null) => {
  const [Component, setComponent] = React.useState(fallback);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    importFn()
      .then(module => {
        setComponent(() => module.default);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, [importFn]);

  return { Component, loading, error };
}; 