import { Button } from "./ui/button"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "./ui/sheet"
import { GithubIcon, LinkedinIcon, MailIcon, Menu } from "lucide-react"
import Link from "next/link"
import { ModeToggle } from "./mode-theme-togle"

export function MenuLinks() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                    <Menu className='h-4 w-4 text-black dark:text-white' />
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Meus links</SheetTitle>
                    <SheetDescription>
                        Acesse minhas redes ou entre em contato comigo!
                    </SheetDescription>
                </SheetHeader>
                <div className="flex justify-center py-4">
                    <div className="grid gap-4">
                        <div className="grid grid-cols-1 items-center gap-4">
                            <Link
                                className='w-32
                                            h-10 
                                            shadow-[0_6px_12px_rgba(0,0,0,.2)] 
                                            dark:shadow-[0_6px_12px_rgba(255,255,255,.2)] 
                                            bg-primary 
                                            text-primary-foreground 
                                            hover:bg-primary/90 
                                            inline-flex 
                                            items-center 
                                            justify-center 
                                            rounded-md 
                                            text-sm 
                                            font-medium 
                                            transition-colors'
                                href='mailto:franciscolima.dev@gmail.com'
                                target='_blank'
                                rel='noreferrer'
                            >
                                E-mail
                                <MailIcon className='h-4 w-4 ml-2 sm:h-4 sm:w-4' />
                            </Link>

                            <Link
                                className='w-32
                                            h-10 
                                            shadow-[0_6px_12px_rgba(0,0,0,.2)] 
                                            dark:shadow-[0_6px_12px_rgba(255,255,255,.2)] 
                                            bg-primary 
                                            text-primary-foreground 
                                            hover:bg-primary/90 
                                            inline-flex 
                                            items-center 
                                            justify-center 
                                            rounded-md 
                                            text-sm 
                                            font-medium 
                                            transition-colors'
                                href='https://github.com/Chaicoo'
                                target='_blank'
                                rel='noreferrer'
                            >
                                Github
                                <GithubIcon className='h-4 w-4 ml-2 sm:h-4 sm:w-4' />
                            </Link>

                            <Link
                                className='w-32
                                            h-10 
                                            shadow-[0_6px_12px_rgba(0,0,0,.2)] 
                                            dark:shadow-[0_6px_12px_rgba(255,255,255,.2)] 
                                            bg-primary 
                                            text-primary-foreground 
                                            hover:bg-primary/90 
                                            inline-flex 
                                            items-center 
                                            justify-center 
                                            rounded-md 
                                            text-sm 
                                            font-medium 
                                            transition-colors'
                                href='https://www.linkedin.com/in/francisco-gab/'
                                target='_blank'
                                rel='noreferrer'
                            >
                                Linkedin
                                <LinkedinIcon className='h-4 w-4 ml-2 sm:h-4 sm:w-4' />
                            </Link>

                            <div className="mx-auto"><ModeToggle /></div>
                        </div>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}