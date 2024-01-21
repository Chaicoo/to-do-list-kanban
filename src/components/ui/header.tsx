"use client"

import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "./mode-theme-togle";
import { MenuLinks } from "./menu-links";

export function Header() {
    return (
        <header className='sticky top-0 px-5 md:px-32 backdrop-blur-md border-b border-gray-700 border-opacity-50 dark:border-opacity-20 z-20'>
            <div className='flex h-20 items-center justify-center relative'>
                <span
                    className='sm:text-2xl font-bold mx-auto'
                >
                    Lista de tarefas Kanban
                </span>
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                    <div className='hidden md:flex  gap-2 items-center'>
                        <Link
                            href='mailto:franciscolima.dev@gmail.com'
                            target='_blank'
                            rel='noreferrer'
                            className='rounded-md p-2.5 hover:bg-accent transition-colors ease-out'
                        >
                            <MailIcon className='h-4 w-4 text-black dark:text-white' />
                        </Link>
                        <Link
                            href='https://github.com/Chaicoo'
                            target='_blank'
                            rel='noreferrer'
                            className='rounded-md p-2.5 hover:bg-accent transition-colors ease-out'
                        >
                            <GithubIcon className='h-4 w-4 text-black dark:text-white' />
                        </Link>
                        <Link
                            href='https://www.linkedin.com/in/francisco-gab/'
                            target='_blank'
                            rel='noreferrer'
                            className='rounded-md p-2.5 hover:bg-accent transition-colors ease-out'
                        >
                            <LinkedinIcon className='h-4 w-4 text-black dark:text-white' />
                        </Link>
                        <ModeToggle />
                    </div>
                    <div className="md:hidden">
                        <MenuLinks />
                    </div>
                </div>
            </div>
        </header>
    );
}