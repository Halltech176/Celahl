import {useState} from 'react'
import sidebar from './Sidebar.module.css'
import {Link} from 'react-router-dom'
import {MdOtherHouses, MdLogout, MdNotifications} from 'react-icons/md'
import {IoKeySharp} from 'react-icons/io5'
import {AiFillPropertySafety} from 'react-icons/ai'
import {MdMenu, MdClose}  from 'react-icons/md'
import profile_image from "../../../Assets/profile_image.png"
import {useSelector} from 'react-redux'
const Sidebar = () => {

    const [open, setOpen] = useState('block')
    const user = JSON.parse(window.localStorage.getItem('user'))
    const names = useSelector((state) => state.userDetails.user)
    console.log(names)
    const {firstName, lastName} = user
    // console.log(user)
    const Open = () => {
        setOpen('block')
}
        return (
        <>
       <div onClick={() => setOpen('block')}>
       <MdMenu size='2rem' />
       </div>
        <aside style={{display : open}} className={`${sidebar.sidebar_container}  bg-primary`}>
            <div className="text-end" onClick={() => setOpen('none')}> <MdClose className=' text-white' size='2rem'/></div>
            <div className={`${sidebar.profile} d-flex flex-column justify-content-center align-items-center my-4`}>
        <Link to='/profile'>
        <img src={profile_image} alt="user-profile" className={`${sidebar.profile_image}`} />
        </Link>
            <Link to="/profile" className={ `${sidebar.sidebar_link}`} >
            <h6>{firstName} {lastName}</h6>
                </Link>
            </div>
        <ul>
            <li className={`${sidebar.sidebar_list}`}><MdOtherHouses color='white' className='me-2 d-inline-block text-center' /><Link to="/overview" className={ `${sidebar.sidebar_link}`} >Overview</Link></li>

            <li className={`${sidebar.sidebar_list}`}><AiFillPropertySafety color='white' className='me-2 d-inline-block text-center' /><Link to="/properties" className={ `${sidebar.sidebar_link}`} >Properties</Link></li>

            <li className={`${sidebar.sidebar_list}`}><IoKeySharp color='white' className='me-2 d-inline-block text-center' /><Link to="/accout" className={ `${sidebar.sidebar_link}`} >Account Plan</Link></li>

            <li className={`${sidebar.sidebar_list}`}><MdNotifications color='white' className='me-2 d-inline-block text-center' /><Link to="/notification" className={ `${sidebar.sidebar_link}`} >Notification</Link></li>

            <li className={`${sidebar.sidebar_list}`}><MdLogout color='white' className='me-2 d-inline-block text-center' /><Link to="/login" className={ `${sidebar.sidebar_link}`} >Log Out</Link></li>
        </ul>

      <div className={`${sidebar.upgrade_container} text-center d-flex flex-column justify-content-center align-items-center my-5 `}>
      <button className="btn btn-primary bg-white text-primary py-2 px-4">UPGRADE</button>
        <p className={ `${sidebar.upgrade_text} text-white`}>Upgrade account type <br /> for more features</p>
      </div>
        </aside>
        </>
    )
}
export default Sidebar