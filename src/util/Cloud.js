
const preset_name = import.meta.env.VITE_CLOUDINARY_PRESET_NAME;
const Name = import.meta.env.VITE_CLOUDINARY_NAME
const Key=import.meta.env.VITE_CLOUDINARY_API_KEY
const secret = import.meta.env.VITE_CLOUDINARY_API_SECRET

//const valor="https://424196674174433:faPlen57d0Gvvyr8osIX8jBWTCU@api.cloudinary.com/v1_1/duhowqa8q/upload_presets"
//const RutaCloud=`https://${Key}:${secret}@api.cloudinary.com/v1_1/${Name}/upload_presets`
//const RutaCloud_one=`https://api.cloudinary.com/v1_1/${Name}/resources/image`
    export const UploadImg = async (ruta) =>{
     
    const data = new FormData()
      data.append('file', ruta[0])
      data.append('upload_preset', preset_name )

     try{         
        const Respuesta = await fetch(`https://api.cloudinary.com/v1_1/${Name}/image/upload`, {
          method:'POST',
          body:data
        })
        const File= await Respuesta.json()
        return File.secure_url
   }catch(error){

   }

    }

    
   export  const UploadVideo = () =>{





    }





