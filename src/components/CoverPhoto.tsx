import CoverPhotoImage from '../assets/cover-photo.jpg'

function CoverPhoto() {
  return (
    <div className='w-[70%]'>
        <img 
            className='w-[100%] h-64 object-cover rounded-md' 
            src={CoverPhotoImage} 
            alt="cover_photo" 
        />
    </div>
  )
}

export default CoverPhoto