import { logoutAccount } from '@/lib/actions/user.actions'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const Footer = ({ user, type = 'desktop' }: FooterProps) => {
    const router = useRouter();

    const handelLogOut = async () => {
        const loggedOut = await logoutAccount();

        if(loggedOut) router.push('/sign-in');
}

  return (
    <footer className='footer'>
        <div className={type === 'mobile' ? 'footer_name-mobile' : 'footer_name'}>
            <p className='text-cl font-bold text-gray-700'>
                {user.name[0]} 
            </p>
        </div>

        <div className={type === 'mobile' ? 'footer_email-mobile' : 'footer_email'}>
            <h1 className='text-14 truncate font-semibold text-gray-700'> 
                {user?.name}
            </h1>
            <p className="text-14 truncate font-normal text-gray-600">
                {user?.email}
            </p>
        </div>
        <div className="footer_image" onClick={handelLogOut}>
            <Image src="icons/logout.svg" fill alt = "fin"/>
        </div>
    </footer>
  )
}

export default Footer
