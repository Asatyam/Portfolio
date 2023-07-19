import React, {useRef} from 'react';
import emailjs from '@emailjs/browser'

export default function Contact() {

    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault(); // prevents the page from reloading when you hit “Send”

      emailjs
        .sendForm(
          'service_1w77abb',
          'template_4hm8kwb',
          form.current,
          'cteoU616Nw_y-nzYO'
        )
        .then(
          (result) => {
            // show the user a success message
            console.log(result)
          },
          (error) => {
            // show the user an error
            console.log(error)
          }
        );
    };

  return (
    <section id='contact' className="m-2 flex flex-col md:justify-center md:items-center">
      <h1 className=" my-2 text-center text-3xl font-bold ">
        <span className="text-3xl font-extralight">I </span>Contact Me
      </h1>
      <div className=" p-4  border-2 md:w-4/5">
        <form
          className="grid  gap-3 "
          method="POST"
          action="https://formspree.io/f/xyyqzekw"
          onSubmit={sendEmail}
          ref={form}
        >
          <div class="relative z-0">
            <input
              type="text"
              id="name"
              name="name"
              className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="name"
              className="absolute text-sm dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Name
            </label>
          </div>
          <div class="relative z-0">
            <input
              type="email"
              id="email"
              name="reply_to"
              className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="email"
              className="absolute text-sm dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email
            </label>
          </div>
          <div class="relative z-0">
            <textarea
              id="message"
              name="message"
              class="block py-3 px-0 w-full text-sm my-2 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="message"
              class="absolute text-sm dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Message
            </label>
          </div>
          <button
            type="submit"
            className="border-2 p-2 text-center m-auto transition hover:bg-blue-500 font-bold text-lg rounded-lg"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
