const APIURL = "https://api.github.com/users/";

const form = document.getElementById('form')
const search = document.getElementById('search')

async function getUsers(usersname) {
  try {
    const { data } = await axios(APIURL + usersname);

    console.log(data);
  } catch (err) {
    console.log(err)
  }
}

form.addEventListener('submit', (e)=>{
    e.preventDefault()

    const user = search.value

    if(user){
        getUsers(user)

        search.value=' '
    }
})
