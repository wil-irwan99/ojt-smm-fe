import LoadingAnimation from '../../property/images/black-loading.json'
import './Loading.css'
import Lottie from 'lottie-react'

const Loading = () => {
    // console.log('loading called');
  return(
        <div className="backdrop-container">
            <div className="backdrop-content">
                <Lottie animationData={LoadingAnimation} loop={true} style={{width:'150px',height:'150px'}}></Lottie>
            </div>
         </div>
    );
}

export default Loading
