import './App.css';
import { Link } from 'react-router-dom';
import Tang from './Tang';
import Vong from './nonprocess';
import Personnel from './Personnel';
import Department from './DepartmentOPR';
import Contract_parties from './contract_parties';
import List from './EBusiness_partner/List';
import Head_tital from './EBusiness_partner/Head_tital';
import Pagination from './Personal/Body/Button_nextpage/Pagination';

function Home() {
  return (
    <>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar bg-black">
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              </label>
            </div> 
            <div className="flex-1 px-2 mx-2"> 
              <img src='https://www.watsadupedia.com/images/2/2c/Scg.png' className='h-12'/>
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal place-items-center">
                <div className='flex px-5 text-xl text-bold text-white'> 
                  <li><Link to='/Cost'>CONTRACTOR COST</Link></li>
                  <li className='text-red-700'><Link to='/'>MANPOWER REPORTING</Link></li>
                </div>
                <div className="avatar online">
                  <div className="w-14 rounded-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
              </ul>
            </div>
          </div>
         <div>
         <Head_tital/>
         </div> 
        </div> 
  
      </div>
      
      <div>
      <div className='flex flex-row'>
            <div className='w-1/2 border p-2'>
              <Personnel/>
            </div>
            <div className='w-1/2 border p-2'>
              <Vong/>
            </div>
          </div>
        </div>
    

      <div className='p-2'>
        <Tang />
      </div>
      <div className='flex flex-row'>
        <div className='w-1/2 border p-2'>
          <Department/>
        </div>
        <div className='w-1/2 border p-2'>
          <Contract_parties/>
        </div>
      </div>

      <List/>

      <div className='flex justify-end p-2'>
     <Pagination/>
     </div>

    </>

  );
}

export default Home;
