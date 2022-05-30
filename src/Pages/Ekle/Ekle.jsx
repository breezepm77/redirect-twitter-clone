import { NavLink } from 'react-router-dom';
import './Ekle.css';
import { useRef } from 'react';
import miniGif from '../../assets/img/gifmini.png';
import useAuth from '../../Hooks/UseAuth';
import logo from '../../assets/img/logo.png';

function Ekle(){

    let fileRef = useRef()
    let fileSesRef = useRef()
    let fileVideoRef = useRef()
    let fileGifRef = useRef()

let [token, setToken] = useAuth()
     return(
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
         <section className='section-ekle'>
         <div>
         <img style={{width: '222px', marginTop: '-25px', marginLeft: '-33px'}} src={logo} alt="img" />
         <form className='form'>
           <div className="ekle-input-section">
               <label htmlFor="isim" className='ekle-input-label'>
           <p className='ekle-input-label-text'>Title:</p>
           <input maxLength={11} minLength={3}  className='ekle-input' type="text" id='isim' />
           </label>
           </div>
           <div className="ekle-input-section">
               <label htmlFor="enisim" className='ekle-input-label'>
           <p className='ekle-input-label-text'>English Title:</p>
           <input maxLength={11} minLength={3}  className='ekle-input' type="text" id='enisim' />
           </label>
           </div>
           <div className="ekle-input-section">
               <label htmlFor="alisim" className='ekle-input-label'>
           <p className='ekle-input-label-text'>Alman Title:</p>
           <input maxLength={11} minLength={3}  className='ekle-input' type="text" id='alisim' />
           </label>
           </div>
           <div className="ekle-input-section">
               <label htmlFor="arisim" className='ekle-input-label'>
           <p className='ekle-input-label-text'>Arab Title:</p>
           <input maxLength={11} minLength={3}  className='ekle-input' type="text" id='arisim' />
           </label>
           </div>
    <div className='input-file-section-nth'>
      <label htmlFor="inputTagAudio" className='file-input-label'>
        Select Audio <br/>
        <i class="fa fa-2x fa-microphone" style={{color: '#000'}}></i>
        <input  className='ekle-input-file' id="inputTagAudio" type="file" accept=".mp3" onChange={(e) => {
            let inputImage = e.target.files[0];

            let splitedString = inputImage.name.split('').slice(20).join('');

            fileSesRef.current.textContent = splitedString.length >= 20 ? splitedString : inputImage.name;  
        }}/>
        <br/>
        <div className="imageNameSection">
          <span ref={fileSesRef} id="imageName"></span>
        </div>
      </label>
    </div>
    <div className='input-file-section'>
      <label htmlFor="inputTagAudio" className='file-input-label'>
        Select English Audio <br/>
        <i class="fa fa-2x fa-microphone" style={{color: '#000'}}></i>
        <input  className='ekle-input-file' id="inputTagAudio" type="file" accept=".mp3" onChange={(e) => {
            let inputImage = e.target.files[0];

            let splitedString = inputImage.name.split('').slice(20).join('');

            fileSesRef.current.textContent = splitedString.length >= 20 ? splitedString : inputImage.name;  
        }}/>
        <br/>
        <div className="imageNameSection">
          <span ref={fileSesRef} id="imageName"></span>
        </div>
      </label>
    </div>
    <div className='input-file-section'>
      <label htmlFor="inputTagAudio" className='file-input-label'>
        Select Alman Audio <br/>
        <i class="fa fa-2x fa-microphone" style={{color: '#000'}}></i>
        <input  className='ekle-input-file' id="inputTagAudio" type="file" accept=".mp3" onChange={(e) => {
            let inputImage = e.target.files[0];

            let splitedString = inputImage.name.split('').slice(20).join('');

            fileSesRef.current.textContent = splitedString.length >= 20 ? splitedString : inputImage.name;  
        }}/>
        <br/>
        <div className="imageNameSection">
          <span ref={fileSesRef} id="imageName"></span>
        </div>
      </label>
    </div>
    <div className='input-file-section'>
      <label htmlFor="inputTagAudio" className='file-input-label'>
        Select Arab Audio <br/>
        <i class="fa fa-2x fa-microphone" style={{color: '#000'}}></i>
        <input  className='ekle-input-file' id="inputTagAudio" type="file" accept=".mp3" onChange={(e) => {
            let inputImage = e.target.files[0];

            let splitedString = inputImage.name.split('').slice(20).join('');

            fileSesRef.current.textContent = splitedString.length >= 20 ? splitedString : inputImage.name;  
        }}/>
        <br/>
        <div className="imageNameSection">
          <span ref={fileSesRef} id="imageName"></span>
        </div>
      </label>
    </div>
           <div className='input-file-section'>
      <label htmlFor="inputTag" className='file-input-label'>
        Select Image <br/>
        <i class="fa fa-2x fa-camera" style={{color: '#000'}}></i>
        <input  accept=".jfif, .jpg, .jpeg, .png, .webp, .svg" className='ekle-input-file' id="inputTag" type="file" onChange={(e) => {
            let inputImage = e.target.files[0];

            let splitedString = inputImage.name.split('').slice(20).join('');

            fileRef.current.textContent = splitedString.length >= 20 ? splitedString : inputImage.name;  
        }}/>
        <br/>
        <div className="imageNameSection">
          <span ref={fileRef} id="imageName"></span>
        </div>
      </label>
    </div>
    <div className='input-file-section'>
      <label htmlFor="inputTagVideo" className='file-input-label'>
        Select Video<br/>
        <i class="fa fa-2x fa-video" style={{color: '#000'}}></i>
        <input  className='ekle-input-file' id="inputTagVideo" type="file" accept=".mp4" onChange={(e) => {
            let inputImage = e.target.files[0];
            
            let splitedString = inputImage.name.split('').slice(20).join('');


            fileVideoRef.current.textContent = splitedString.length >= 20 ? splitedString : inputImage.name;  
        }}/>
        <br/>
        <div className="imageNameSection">
          <span ref={fileVideoRef} id="imageName"></span>
        </div>
      </label>
    </div>
    <div className='input-file-section'>
      <label htmlFor="inputTagGif" className='file-input-label'>
        Select Gif <br/>
        <img src={miniGif} alt="img" />
        <input  accept=".gif" className='ekle-input-file' id="inputTagGif" type="file" onChange={(e) => {
            let inputImage = e.target.files[0];

            let splitedString = inputImage.name.split('').slice(20).join('');

            fileGifRef.current.textContent = splitedString.length >= 20 ? splitedString : inputImage.name;  
        }}/>
        <br/>
        <div className="imageNameSection">
          <span ref={fileGifRef} id="imageName"></span>
        </div>
      </label>
    </div>
    <div className="ekle-btn-section">
    <button className='ekle-btn' type='submit'>Kaydet</button>
    </div>
         </form>
         </div>
         </section>
        </>
)
}

export default Ekle;