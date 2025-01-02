type CoverPhotoProps = {
  renderThis: string;
}

function CoverPhoto({ renderThis }:CoverPhotoProps) {

  return (
    <div className='w-[70%]'>
      <img 
        className={`${renderThis == 'Blog' ? 'bg-gray-300' : ''} w-[100%] h-64 object-scale-down sm:object-cover rounded-md`} 
        src={
          renderThis == 'About' ? '../../cover_photos/cover-photo.jpg' :
          renderThis == 'Skills' ? '../../cover_photos/minecraft.jpg' : 
          renderThis == 'Blog' ? '' : '../../cover_photos/capstone_team_cropped.jpg'
        } 
        alt={`${renderThis == 'Blog' ? '' : 'cover_photo'}`} 
        loading='lazy'
      />
    </div>
  )
}

export default CoverPhoto