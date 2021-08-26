import { getStorage, ref, listAll, getMetadata, getDownloadURL } from "firebase/storage"

const storage = getStorage()

const storageRef = ref(storage)

export function doThing () {
  console.log(storageRef)
}

export function getFiles () {
  return listAll(storageRef)
    .then(res => res.items.map((itemRef) => Promise.all([ getFileData(itemRef), getUrl(itemRef) ])))
    .then(p => Promise.all(p))
    .then(items => items.map(([data, url]) => {
      return { name: data.name, url }
    }))
    .catch((error) => {
      console.log('oh no!')
      console.log(error.message)
    })

}

function getFileData (fileRef) {
  return getMetadata(fileRef)
}

function getUrl (someRef) {
  return getDownloadURL(someRef)
}
