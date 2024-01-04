import React from 'react'
import '../Utils/Header.css';
import Logo from "../assets/Logo.png"


function Header() {
  return (
    <>
    <header>
    <div className="font-title ">
    <div className="logo-container">
    <img src={Logo} alt="logo" className='logo-image'/>
        <h2 className='title-styling'>Logo</h2>
        <img className="serch-icon icon:hover" src="https://cdn-icons-png.flaticon.com/128/149/149852.png" alt="search" />
        <img className="icon icon:hover" src="https://cdn-icons-png.flaticon.com/128/2767/2767018.png" alt="heart" />
        <img className="icon icon:hover" src="https://cdn-icons-png.flaticon.com/128/1656/1656850.png" alt="bag" />
        <img className="icon icon:hover" src="https://cdn-icons-png.flaticon.com/128/1144/1144760.png" alt="user" />
        <img className="icon icon:hover" src="https://cdn-icons-png.flaticon.com/128/984/984204.png" alt="lan" />
    </div>

    </div>
    <br />
    <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-white">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
    
            <div className="flex items-center lg:order-2">
                
                <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
            </div>
            <div className="centre-nav" id="mobile-menu-2">
                <ul className="flex flex-col mt-8 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                    <li>
                        <a href="#" className ="shop" aria-current="page">SHOP</a>
                    </li>
                    <li>
                        <a href="#" className="skill">SKILLS</a>
                    </li>
                    <li>
                        <a href="#" className="">STORIES</a>
                    </li>
                    <li>
                        <a href="#" className="about">ABOUT</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 lg:dark:hover:text-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-800 lg:dark:hover:bg-transparent  dark:text-black text-lg">CONTACT US</a>
                    </li>
                </ul>
            </div>
            
        </div>
        <br />

        <div className="font-link"style={{textAlign: 'center', color: '#252020', fontSize: 45, fontWeight: '400', textTransform: 'uppercase', letterSpacing: 1, wordWrap: 'break-word'}}>DISCOVER OUR PRODUCTS</div>
    <br />
    <div className=  "cen-div">Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</div>

    <div className='filter-recommend'>
       <div className='filter'>Filters
       <text className='recommend recommend:hover'>Recommended</text>
       </div>
       
    </div>
        
    </nav>
    
</header>
    </>
  )
}

export default Header