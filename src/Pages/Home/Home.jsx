import './Home.css';
import fakeData from '../../FakeData/fakedata'
import { useState, useRef } from 'react';
import useAuth from '../../Hooks/UseAuth';
import { NavLink } from 'react-router-dom';
import rightIcon from '../../assets/img/righticon.png';
import logo from '../../assets/img/logo.png';

function Home() {
  let [id, setId] = useState()
  let [value, setValue] = useState("")
  let [token, setToken] = useAuth()

  let findData = id ? fakeData.find(elem => elem.id == id) : 'empty'

  let modalRef = useRef()
  let modalWrapRef = useRef()
  
  return (
        <>
          <div ref={modalRef} className="modal" onClick={() => {
              modalRef.current.style.display = 'none';
          }}>
            <div ref={modalWrapRef} className="modal-wrapper">
                <img className='modal-img' src={findData.img} alt="img" />
                <div className="title-section">
                <h1 className='modal-title'>Id: {findData.id}</h1>
                <h1 className='modal-title'>Name: {findData.name}</h1>
                <h1 className='modal-title'>İngilizce: {findData.enName}</h1>
                <h1 className='modal-title'>Almanca: {findData.alName}</h1>
                <h1 className='modal-title'>Arapça: {findData.arName}</h1>
                <h1 className='modal-title-nth'>Text: <p className='modal-text'>{findData.text}</p></h1>
                </div>
            </div>
          </div>
          <header className='header'>
          <div className="header-flex-section">
          <div className="header-right-section">
          <NavLink style={{textDecoration: 'none'}} to='/Home'>
          <img style={{width: '222px', marginTop: '-18px'}} src={logo} alt="img" />
          </NavLink>
          </div>
           <div className="header-left-section">
           <input className='header-search-input' type="text" placeholder='Search...' onChange={(e) => {
             setValue(e.target.value)
           }}/>
           <NavLink to="/ekle" className='header-logout'>Ekle</NavLink>
           <p className='header-logout' onClick={() => {
               setToken(false)
           }}>Log Out</p>
           </div>
          </div>
          </header>
          <section>
          <img style={{width: '222px', marginTop: '-25px', marginLeft: '-33px'}} src={logo} alt="img" />
  <div className="tbl-header">
    <table cellpadding="0" cellspacing="0" border="0">
      <thead>
        <tr>
        <th className='table-throw'>durum</th>
          <th className='table-throw'>ID</th>
          <th className='table-throw'>date of entry</th>
          <th className='table-throw'>Isim</th>
          <th className='table-throw'>İngilizce</th>
          <th className='table-throw'>Almanca</th>
          <th className='table-throw'>Arapça</th>
          <th className='table-throw'>Learn More</th>
        </tr>
      </thead>
    </table>
  </div>
  <div className="tbl-content">
    <table cellpadding="0" cellspacing="0" border="0">
      <tbody>
      {
        fakeData.filter((elem) => {
          if(value == "") {
            return elem
          }else if(elem.name.toLowerCase().includes(value.toLowerCase())) {
            return elem
          }
        }).map((elem, index) => (
            <>
            <tr key={index}>
          <th className='table-throw-left'>
            {
              elem.img == '' ? 'Bos' : elem.name == '' ? 'Bos' : elem.alName == '' ? 'Bos' : elem.arName == '' ? 'Bos' : elem.araudio == '' ? 'Bos' : elem.alaudio == '' ? 'Bos' : elem.audio == '' ? 'Bos' : elem.enaudio == '' ? 'Bos' : elem.enName == '' ? 'Bos' : elem.gif == '' ? 'Bos' : elem.video == '' ? 'Bos' : elem.date == '' ? 'Bos' : 'Dolu'
            }
          </th>
          <td>{elem.id}</td>
          <td>{elem.date}</td>
          <td>{elem.name}</td>
          <td>{elem.enName}</td>
          <td>{elem.alName}</td>
          <td>{elem.arName}</td>
          <td className='table-tadle'>
            <NavLink className='table-link' to='/More' onClick={() => {
              window.localStorage.setItem('filterId', elem.id)
            }}>
              <img style={{width: '20px'}} src={rightIcon} alt="img" />
            </NavLink>
          </td>
        </tr>
            </>
        ))
      }
      </tbody>
    </table>
    </div>
</section>
        </>
    )
}

export default Home;