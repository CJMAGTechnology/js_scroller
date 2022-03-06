// unsplash

const count = 10
const apiKey = 'ocNG58F-j2oTMDMYHkG2XDP9FO3J5KMadvO6ZWhwp6Q'
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`

// get photos
async function getPhotos() {
    try {
        const response = await fetch(apiUrl)
        const data = await response.json()

        
    } catch (error) {
        
    }
}

// on load
getPhotos()





