const imageContainer = document.getElementById('image-container')
const loader = document.getElementById('loader')


let photosArray = []



// unsplash

const count = 30
const apiKey = 'ocNG58F-j2oTMDMYHkG2XDP9FO3J5KMadvO6ZWhwp6Q'
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`

// helper function
function setAttributes(element, attributes){
    for (const key in attributes){
        element.setAttribute(key, attributes[key])
    }
}

// create elements for links and photos add to dom
function displayPhotos() {
    photosArray.forEach((photo) => {
            // create <a> to link to unsplash
        const item = document.createElement('a')
        // item.setAttribute('href', photo.links.html)
        // item.setAttribute('target', '_blank')
        setAttributes(item, {
            href: photo.links.html,
            target: '_blank'
        })
        // create imaget for photo
        const img = document.createElement('img')
        // img.setAttribute('src', photo.urls.regular)
        // img.setAttribute('alt', photo.alt_description)
        // img.setAttribute('tifle', photo.alt_description)
        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt.description,
            title: photo.alt.description
        })

        //  put <image> inside <a> both instide 
        item.appendChild(img)
        imageContainer.appendChild(item)
    })

}


// get photos
async function getPhotos() {
    try {
        const response = await fetch(apiUrl)
        photosArray = await response.json()
        displayPhotos()
        
    } catch (error) {
        
    }
}

// on load
getPhotos()









