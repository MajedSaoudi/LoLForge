import React from 'react'
import './Footer.css';
import logo from '../Assets/Images/Logo.png';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div className='flex justify-center bg-black pt-20 pb-28 text-white '>
      <div className='footer-container'>
      <div className=' lg:w-1/4 sm:w-full mb-6'>
      <a href={'/'}>
        <img src={logo} className='w-20 '/>
      </a> 
        <p className='mt-4 text-md text-gray-300'>©2025 Outplayed Inc.</p>
        <p className='text-gray-600 text-[13px] leading-[16px] mt-2'>LoLForge Stats isn't endorsed by Riot Games and doesn't reflect the views or opinions of Riot Games or anyone officially involved in producing or managing League of Legends.</p>
      </div>
        <div className='Links-container flex w-full gap-[10%] justify-around pl-10'>
          
            <div >
              
              <p className='Link-header'>Links</p>
              <a className='Link' href='/'><p>Home</p></a>
              <a className='Link' href='/Champions'><p>Champions</p></a>
              <a className='Link' href='/Items'><p>Items</p></a>
              <a className='Link' href='/Faq'><p>FAQ</p></a>
            
            </div>
            <div>
             <p className='Link-header'>
              Terms
             </p>
             <div className='Links'>
             <a className='Link'><p>Privacy Shield</p></a>
             <a className='Link'><p>Privacy Policy</p></a>
             <a className='Link'><p>Terms of Service</p></a>
             </div>
            </div>
            <div>
                <p>
                Socials
                </p>
                <ul class="footer-links-list">
                  <li class="footer-link-item"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" viewBox="0 0 18 18" class="footer-icon"><path d="M14.478 4.003A13 13 0 0 0 11.222 3a8 8 0 0 0-.414.844 12.4 12.4 0 0 0-3.606 0A10 10 0 0 0 6.788 3a12.8 12.8 0 0 0-3.256 1.003c-2.062 3.04-2.619 6.01-2.34 8.938 1.369.995 2.69 1.6 3.988 1.998.319-.43.605-.892.852-1.377a8.4 8.4 0 0 1-1.345-.645 5 5 0 0 0 .326-.254c2.595 1.186 5.405 1.186 7.968 0 .112.087.215.175.327.254q-.643.383-1.346.645c.247.486.534.947.852 1.377a13.2 13.2 0 0 0 3.988-1.998c.343-3.39-.541-6.335-2.324-8.938M6.39 11.134c-.78 0-1.417-.708-1.417-1.575 0-.868.621-1.576 1.417-1.576.788 0 1.433.708 1.417 1.576 0 .867-.629 1.575-1.417 1.575m5.23 0c-.78 0-1.417-.708-1.417-1.575 0-.868.621-1.576 1.417-1.576.788 0 1.433.708 1.417 1.576 0 .867-.62 1.575-1.417 1.575"></path></svg>
                <a href="https://discord.gg/" target="_blank" rel="noopener noreferrer" class="footer-link">Discord</a></li><li class="footer-link-item"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 18 18" class="footer-icon"><path fill="#5C5C8E" d="M16.66 4.242a6.3 6.3 0 0 1-1.802.494A3.15 3.15 0 0 0 16.237 3a6.3 6.3 0 0 1-1.992.761A3.137 3.137 0 0 0 8.9 6.621a8.9 8.9 0 0 1-6.465-3.276 3.136 3.136 0 0 0 .971 4.188 3.1 3.1 0 0 1-1.42-.393l-.001.039A3.14 3.14 0 0 0 4.5 10.255a3.16 3.16 0 0 1-1.416.054 3.14 3.14 0 0 0 2.93 2.178 6.3 6.3 0 0 1-4.644 1.299 8.87 8.87 0 0 0 4.808 1.41c5.77 0 8.925-4.78 8.925-8.925q0-.205-.01-.406a6.4 6.4 0 0 0 1.565-1.623"></path></svg>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="footer-link">Twitter</a></li><li class="footer-link-item"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 18 18" class="footer-icon"><path fill="#5C5C8E" d="M9.183 3c.4.002 1.403.012 2.468.055l.377.016c1.072.05 2.143.137 2.675.286.709.199 1.266.78 1.454 1.516.3 1.17.337 3.452.342 4.004v.245c-.005.552-.043 2.834-.342 4.004-.191.739-.748 1.32-1.454 1.516-.531.148-1.603.235-2.675.286l-.377.016A76 76 0 0 1 9.183 15h-.367c-.848-.005-4.393-.043-5.52-.357a2.11 2.11 0 0 1-1.454-1.516c-.3-1.17-.337-3.452-.342-4.004v-.245c.005-.552.042-2.835.342-4.004.19-.74.748-1.32 1.454-1.516 1.127-.314 4.672-.352 5.52-.357zM7.499 6.374v5.25L12 9z"></path></svg><a href="https://youtube.com" target="_blank" rel="noopener noreferrer" class="footer-link">YouTube</a></li>
                <li class="footer-link-item"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 18 18" class="footer-icon"><path fill="#5C5C8E" d="M9 6.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5m0-1.5a3.75 3.75 0 1 1 .001 7.5 3.75 3.75 0 0 1 0-7.5m4.876-.188a.938.938 0 1 1-1.877-.001.938.938 0 0 1 1.877 0M9 3c-1.856 0-2.159.005-3.022.043-.588.028-.982.107-1.348.25-.326.125-.56.276-.81.526a2.2 2.2 0 0 0-.528.811c-.143.367-.222.761-.249 1.348-.039.828-.043 1.118-.043 3.022 0 1.856.005 2.158.043 3.021.028.588.107.983.249 1.348.126.326.277.562.526.81.252.253.487.403.81.528.37.143.765.223 1.35.25.828.038 1.118.043 3.022.043 1.856 0 2.158-.005 3.021-.043.587-.028.982-.107 1.348-.25.325-.125.561-.277.81-.526.253-.252.403-.486.528-.81.143-.37.222-.764.25-1.35.038-.827.043-1.117.043-3.021 0-1.856-.005-2.158-.044-3.021-.027-.587-.107-.983-.248-1.35a2.2 2.2 0 0 0-.528-.81 2.2 2.2 0 0 0-.81-.527c-.367-.142-.762-.222-1.349-.249C11.194 3.005 10.905 3 9.001 3m0-1.5c2.037 0 2.292.008 3.092.045.798.037 1.342.163 1.82.349.495.19.912.448 1.329.865s.674.835.865 1.329c.185.477.311 1.022.349 1.82.035.8.045 1.055.045 3.092s-.008 2.292-.045 3.092c-.037.798-.164 1.342-.349 1.82-.19.495-.449.912-.865 1.33a3.7 3.7 0 0 1-1.329.864c-.478.185-1.022.311-1.82.349-.8.036-1.055.045-3.092.045s-2.292-.008-3.092-.045c-.798-.037-1.342-.164-1.82-.349a3.7 3.7 0 0 1-1.33-.865 3.7 3.7 0 0 1-.865-1.328c-.185-.479-.31-1.023-.348-1.821C1.51 11.292 1.5 11.037 1.5 9s.007-2.292.045-3.092c.037-.799.163-1.342.348-1.82a3.7 3.7 0 0 1 .865-1.33 3.7 3.7 0 0 1 1.33-.864c.477-.186 1.021-.311 1.82-.349C6.709 1.509 6.963 1.5 9 1.5"></path></svg><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="footer-link">Instagram</a></li>
                <li class="footer-link-item"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 18 18" class="footer-icon"><path fill="#5C5C8E" d="M9 1.5A7.5 7.5 0 0 0 7.83 16.409v-5.241H5.925V9h1.904V7.348c0-1.88 1.12-2.918 2.833-2.918.82 0 1.679.146 1.679.146v1.846h-.946c-.932 0-1.222.578-1.222 1.171V9h2.08l-.333 2.168h-1.747v5.24A7.502 7.502 0 0 0 9 1.5"></path></svg>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="footer-link">Facebook</a></li></ul>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Footer