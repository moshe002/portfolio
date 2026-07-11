function CoverPhoto() {

  return (
    <div className='w-[70%]'>
      <img 
        className={`w-[100%] h-64 object-cover sm:object-cover rounded-md`} 
        src={'../../cover_photos/minecraft.webp'} 
        alt={'cover_photo'} 
        loading='lazy'
      />
    </div>
  )
}

export default CoverPhoto