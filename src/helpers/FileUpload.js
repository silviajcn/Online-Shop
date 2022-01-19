export const fileUpload = async (file) => {
    
    const cloudUrl = 'https://api.cloudinary.com/v1_1/silviajcn/upload';
    const formData = new FormData();
    formData.append('upload_preset', 'prueba-tecnica-tres');
    formData.append('file',file);
    
    
    const resp = await fetch(cloudUrl, {
        method: 'POST',
        body: formData
    })
       const cloudResp = await resp.json();
       return cloudResp.secure_url;
    
}