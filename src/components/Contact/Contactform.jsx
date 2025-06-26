import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';

function Contactform() {
    const contact = [
        { country: "India", code: "+91", size: 10 },
        { country: "America", code: "+99", size: 3 },
        { country: "Czech", code: "+69", size: 5 }
    ];

    const [key, setKey] = useState(0);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        data.full_name = data.your_name + " " + data.lastname;
        data.your_subject = "Contact Us Form";

        axios.post("https://preeticomputers.com/api/contact-us", data)
            .then((res) => {
                reset();
                console.log("Submitted:", data);
            })
            .catch((error) => {
                console.error("Submission error:", error);
            });
    };

    const handleSelectChange = (e) => {
        setKey(e.target.value);
    };

    return (
        <div className='bg-white w-full lg:mt-20 lg:mb-10 p-5 md:p-10 rounded-4xl'>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-full'>
                
                <section className='flex flex-col gap-4 lg:flex-row'>
                    <span className='flex flex-col'>
                        <label>First Name</label>
                        <input className="h-10 border border-gray-300 rounded-xl my-2"
                            type="text" {...register("your_name", { required: true })} />
                        {errors.your_name && <span className='text-red-500 text-xs'>First name is required</span>}
                    </span>

                    <span className='flex flex-col'>
                        <label>Last Name</label>
                        <input className="h-10 border border-gray-300 rounded-xl my-2"
                            type="text" {...register("lastname", { required: true })} />
                        {errors.lastname && <span className='text-red-500 text-xs'>Last name is required</span>}
                    </span>
                </section>

                <label>Email</label>
                <input className="h-10 border border-gray-300 rounded-xl my-2"
                    type="email" {...register("your_email", { required: true })} />
                {errors.your_email && <span className='text-red-500 text-xs'>Email is required</span>}

                <label>Address</label>
                <input className="h-10 border border-gray-300 rounded-xl my-2"
                    type="text" {...register("your_address", { required: true })} />
                {errors.your_address && <span className='text-red-500 text-xs'>Address is required</span>}

                <label>Phone Number</label>
                <section className='flex items-center gap-3 w-full'>
                    <select className='rounded-xl border p-2 border-gray-300'
                        defaultValue={key} onChange={handleSelectChange}
                        {...register("your_country", { required: true })}>
                        {contact.map((cont, index) => (
                            <option key={index} value={index}>{cont.country} {cont.code}</option>
                        ))}
                    </select>

                    <input
                        className="h-10 border border-gray-300 w-full rounded-xl my-2"
                        type="text"
                        {...register("your_phone", {
                            required: true,
                            minLength: contact[key].size,
                            maxLength: contact[key].size,
                            pattern: /^[0-9]+$/
                        })}
                    />
                </section>
                {errors.your_phone && <span className='text-red-500 text-xs'>Phone must be {contact[key].size} digits</span>}

                <label>Message</label>
                <textarea className="min-h-40 border border-gray-300 rounded-xl my-2"
                    {...register("your_message", { required: true })} />
                {errors.your_message && <span className='text-red-500 text-xs'>Message is required</span>}

                <input className="h-10 rounded-xl bg-blue-500 w-fit mx-auto px-10 text-white my-2"
                    type="submit" />
            </form>
        </div>
    );
}

export default Contactform;
