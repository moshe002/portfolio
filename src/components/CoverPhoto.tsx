import CoverPhotoImage1 from '../assets/cover-photo.jpg';
import CoverPhotoImage2 from '../assets/minecraft.jpg';
import CoverPhotoImage3 from '../assets/capstone_team_cropped.jpg';

interface CoverPhotoProps {
  renderThis: string;
}

function CoverPhoto({ renderThis }:CoverPhotoProps) {

  const cycleCoverPhoto = () => {
    switch(renderThis){
      case "About":
        return (
          <img 
            className='w-[100%] h-64 object-cover rounded-md' 
            src={CoverPhotoImage1} 
            alt="cover_photo" 
            loading='lazy'
          />
        )
      case "Skills":
        return (
          <img 
            className='w-[100%] h-64 object-cover rounded-md' 
            src={CoverPhotoImage2} 
            alt="cover_photo" 
            loading='lazy'
          />
        )
      case "Experience":
        return (
          <img 
            className='w-[100%] h-64 object-scale-down sm:object-cover rounded-md' 
            src={CoverPhotoImage3} 
            alt="cover_photo" 
            loading='lazy'
          />
        )
    }
  }

  return (
    <div className='w-[70%]'>
      {
        cycleCoverPhoto()
      }
    </div>
  )
}

export default CoverPhoto