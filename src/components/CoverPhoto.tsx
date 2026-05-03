// type CoverPhotoProps = {
//   renderThis: string;
// }

// { renderThis }:CoverPhotoProps
function CoverPhoto() {

  return (
    <div className='w-[70%]'>
      <img 
        className={`w-[100%] h-64 object-scale-down sm:object-cover rounded-md`} 
        src={'../../cover_photos/minecraft.webp'} 
        alt={'cover_photo'} 
        loading='lazy'
      />
    </div>
  )
}

export default CoverPhoto