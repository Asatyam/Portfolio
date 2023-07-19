import React from "react";
import SingleProject from "./SingleProject";


export default function Projects(){

    const projects = [
        {
            name:'SocialNetwork',
            title: 'Social Network',
            description: ['Built full stack social networking app using MERN Stack',
                         'Used NextJS as framework for routing, data fetching and ensuring best performance',
                        'Implemented user authentication using PassportJS and JWT',
                    'Stored images on Cloudinary using multer library',
                 'Made it completely responsive using vanilla CSS',],
            github:'https://github.com/Asatyam/SocialNetwork',
            live:'https://social-network-asatyam.vercel.app/',
        },
        {
            name:'Todo',
            title: 'Full Stack Todo Application',
            description:['Built a Todo Application with CRUD features',
                        'Used VueJS and TailwindCSS for designing UI',
                        'Used NuxtJS as the framework for routing, data fetching and transitions',
                    ' Employed Prisma as ORM for PostgreSQL and ExpressJS with TypeScript for creating the backend',
                ],
            github:'https://github.com/Asatyam/Todo-vue',
            live:'https://todo-vue1-fbvpif7am-asatyam.vercel.app/',
        },
        {
            name:'Blog',
            title: 'Personal Blog Website',
            description: ['Created a personal blog website using MERN Stack',
                        'Additionally created admin dashboard to create, manage blogs and moderate comments ',
                        'Used same backend for both public page and CMS',
                         'Secured API for CMS using JWT tokens',
                        'Work in progress',],
            github:'https://github.com/Asatyam/Blog_client',
            live:'https://blog-client-nu.vercel.app/',
        },
        {
            name:'ShoppingCart',
            title: 'Shopping Cart',
            description: ['Create a simple Shopping Cart using ReactJS',
                        'Implement Routing using NextJS',
                    'Used Context API to prevent prop drilling',
                'Used ESLint to abide by the best practices'],
            github:'https://github.com/Asatyam/shopping-cart',
            live:'https://shopping-cart-asatyam.vercel.app/',
        }


    ]

    return(
        <section id='projects' className="">
            <h1 className=" my-2 text-center text-3xl font-bold "><span className="text-3xl font-extralight">I </span>My Projects</h1>
            <div className="w-full flex justify-center items-center">
                <div className= "grid md:w-4/5  ">
                    {projects.map(project=><SingleProject key={project.title} title={project.title} name={project.name} description={project.description} github={project.github} live={project.live} />)}
                </div>
            </div>
        </section>
    )
}