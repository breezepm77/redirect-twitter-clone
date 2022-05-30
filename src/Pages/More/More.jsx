import './More.css';
import fakeData from '../../FakeData/fakedata';
import ReactAudioPlayer from 'react-audio-player';
import useAuth from '../../Hooks/UseAuth';
import { NavLink } from 'react-router-dom';
import { useRef } from 'react';
import miniGif from '../../assets/img/gifmini.png';
import logo from '../../assets/img/logo.png';

function More() {
    let windowId = window.localStorage.getItem('filterId');

    let findData = fakeData.find(elem => elem.id == windowId)

    let [token, setToken] = useAuth()

    let fileImageRef = useRef()
    let fileAuidoEnRef = useRef()
    let fileAudioRef = useRef()
    let fileAudioAlRef = useRef()
    let fileAudioArRef = useRef()
    let fileGifRef = useRef()
    let fileVideoRef = useRef()

    return (
        <>
        <div>
        <header className='header'>
          <div className="header-flex-section">
          <div className="header-right-section">
          <NavLink style={{textDecoration: 'none'}} to='/Home'>
          <img style={{width: '222px', marginTop: '-18px'}} src={logo} alt="img" />
          </NavLink>
          </div>
           <div className="header-left-section">
           <NavLink to="/ekle" className='header-logout'>Ekle</NavLink>
           <p className='header-logout' onClick={() => {
               setToken(false)
           }}>Log Out</p>
           </div>
          </div>
          </header>
          </div>  
          <section>
          <img style={{width: '222px', marginTop: '-25px', marginLeft: '-33px'}} src={logo} alt="img" />
  <div className="tbl-header">
    <table cellpadding="0" cellspacing="0" border="0">
      <thead>
        <tr>
          <th>ID</th>
          <th>Isim</th>
          <th>İngilizce</th>
          <th>Almanca</th>
          <th>Arapça</th>
        </tr>
      </thead>
    </table>
  </div>
  <div className="tbl-content">
    <table cellpadding="0" cellspacing="0" border="0">
      <tbody>
        <tr>
          <td>{findData.id}</td>
          <td>{findData.name}</td>
          <td>{findData.enName}</td>
          <td>{findData.alName}</td>
          <td>{findData.arName}</td>
        </tr>
      </tbody>
    </table>
    </div>
    <div className="tbl-header">
    <table cellpadding="0" cellspacing="0" border="0">
      <thead>
        <tr>
          <th>Ses</th>
          <th>İngilizce Ses</th>
          <th>Almanca Ses</th>
          <th>Arapça Ses</th>
        </tr>
      </thead>
    </table>
  </div>
  <div className="tbl-content">
    <table cellpadding="0" cellspacing="0" border="0">
      <tbody>
        <tr>
          <td>
              <ReactAudioPlayer src={findData.audio} controls/>
          </td>
          <td>
              <ReactAudioPlayer src={findData.enaudio} controls/>
          </td>
          <td>
              <ReactAudioPlayer src={findData.alaudio} controls/>
          </td>
          <td>
              <ReactAudioPlayer src={findData.araudio} controls/>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
    <div className="tbl-header">
    <table cellpadding="0" cellspacing="0" border="0">
      <thead>
        <tr>
          <th>resim</th>
          <th>Animasyon</th>
          <th>Gif</th>
        </tr>
      </thead>
    </table>
  </div>
  <div className="tbl-content">
    <table cellpadding="0" cellspacing="0" border="0">
      <tbody>
        <tr>
          <td>
          <img className='more-poster' src={findData.img} alt="img" />
          </td>
          <td>
              <video className='more-video' src={findData.video} controls></video>
          </td>
          <td>
          <img className='more-poster' src={findData.gif} alt="img" />
          </td>
        </tr>
      </tbody>
    </table>
    </div>
    <div className="more-flex-center-section">
    <form className='more-form'>
    <img style={{width: '222px', marginTop: '-25px', marginLeft: '-33px'}} src={logo} alt="img" />
        <div className="more-flex-section">
        <div className="first-section">
        <input className='more-form-text-input' type="text" placeholder='turkish name' />
        <input className='more-form-text-input' type="text" placeholder='english name' />
        <input className='more-form-text-input' type="text" placeholder='alman name' />
        <input className='more-form-text-input' type="text" placeholder='arab name' />
        </div>
        <div className="more-block-nth-section">
        <div className='input-file-section-nth-audio-more'>
      <label htmlFor="inputTag" className='file-input-label-more'>
        Select Audio <br/>
        <i class="fa fa-2x fa-microphone" style={{color: '#000'}}></i>
        <input  accept=".mp3" className='ekle-input-file-more' id="inputTag" type="file" onChange={(e) => {
            let inputImage = e.target.files[0];

            let splitedString = inputImage.name.split('').slice(20).join('');

            fileAudioRef.current.textContent = splitedString.length >= 20 ? splitedString : inputImage.name;  
        }}/>
        <br/>
        <div className="imageNameSection-more">
          <span ref={fileAudioRef} id="imageName-more"></span>
        </div>
      </label>
    </div>
    <div className='input-file-section-nth-audio-more'>
      <label htmlFor="inputTag" className='file-input-label-more'>
        Select English Audio <br/>
        <i class="fa fa-2x fa-microphone" style={{color: '#000'}}></i>
        <input  accept=".mp3" className='ekle-input-file-more' id="inputTag" type="file" onChange={(e) => {
            let inputImage = e.target.files[0];

            let splitedString = inputImage.name.split('').slice(20).join('');

            fileAuidoEnRef.current.textContent = splitedString.length >= 20 ? splitedString : inputImage.name;  
        }}/>
        <br/>
        <div className="imageNameSection-more">
          <span ref={fileAuidoEnRef} id="imageName-more"></span>
        </div>
      </label>
    </div>
    <div className='input-file-section-nth-audio-more'>
      <label htmlFor="inputTag" className='file-input-label-more'>
        Select Alman Audio <br/>
        <i class="fa fa-2x fa-microphone" style={{color: '#000'}}></i>
        <input  accept=".mp3" className='ekle-input-file-more' id="inputTag" type="file" onChange={(e) => {
            let inputImage = e.target.files[0];

            let splitedString = inputImage.name.split('').slice(20).join('');

            fileAudioAlRef.current.textContent = splitedString.length >= 20 ? splitedString : inputImage.name;  
        }}/>
        <br/>
        <div className="imageNameSection-more">
          <span ref={fileAudioAlRef} id="imageName-more"></span>
        </div>
      </label>
    </div>
    <div className='input-file-section-nth-audio-more'>
      <label htmlFor="inputTag" className='file-input-label-more'>
        Select Arab Audio <br/>
        <i class="fa fa-2x fa-microphone" style={{color: '#000'}}></i>
        <input  accept=".mp3" className='ekle-input-file-more' id="inputTag" type="file" onChange={(e) => {
            let inputImage = e.target.files[0];

            let splitedString = inputImage.name.split('').slice(20).join('');

            fileAudioArRef.current.textContent = splitedString.length >= 20 ? splitedString : inputImage.name;  
        }}/>
        <br/>
        <div className="imageNameSection-more">
          <span ref={fileAudioArRef} id="imageName-more"></span>
        </div>
      </label>
    </div>
        </div>
    <div className="more-block-nth-section">
    <div className='input-file-section-nth-img'>
      <label htmlFor="inputTag" className='file-input-label-more'>
        Select Image <br/>
        <i class="fa fa-2x fa-camera" style={{color: '#000'}}></i>
        <input  accept=".mp3" className='ekle-input-file-more' id="inputTag" type="file" onChange={(e) => {
            let inputImage = e.target.files[0];

            let splitedString = inputImage.name.split('').slice(20).join('');

            fileImageRef.current.textContent = splitedString.length >= 20 ? splitedString : inputImage.name;  
        }}/>
        <br/>
        <div className="imageNameSection-more">
          <span ref={fileImageRef} id="imageName-more"></span>
        </div>
      </label>
    </div>
    <div className='input-file-section-nth-img'>
      <label htmlFor="inputTag" className='file-input-label-more'>
        Select Video <br/>
        <i class="fa fa-2x fa-video" style={{color: '#000'}}></i>
        <input  accept=".mp3" className='ekle-input-file-more' id="inputTag" type="file" onChange={(e) => {
            let inputImage = e.target.files[0];

            let splitedString = inputImage.name.split('').slice(20).join('');

            fileVideoRef.current.textContent = splitedString.length >= 20 ? splitedString : inputImage.name;  
        }}/>
        <br/>
        <div className="imageNameSection-more">
          <span ref={fileVideoRef} id="imageName-more"></span>
        </div>
      </label>
    </div>
    <div className='input-file-section-nth-img'>
      <label htmlFor="inputTag" className='file-input-label-more'>
        Select Gif <br/>
        <img src={miniGif} alt="img" />
        <input  accept=".mp3" className='ekle-input-file-more' id="inputTag" type="file" onChange={(e) => {
            let inputImage = e.target.files[0];

            let splitedString = inputImage.name.split('').slice(20).join('');

            fileGifRef.current.textContent = splitedString.length >= 20 ? splitedString : inputImage.name;  
        }}/>
        <br/>
        <div className="imageNameSection-more">
          <span ref={fileGifRef} id="imageName-more"></span>
        </div>
      </label>
    </div>
    </div>
        </div>
        <div className="ekle-btn-section-more">
            <button className='ekle-btn-more' type='submit'>submit</button>
        </div>
    </form>
    </div>
</section>
        </>
    );
}

export default More;