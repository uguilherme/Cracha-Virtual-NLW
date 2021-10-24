//Variavel const, let
const LinksSocialMedia = {
  github: 'uGuilherme',
  youtube: 'UCmHQCkfS7WGdf8kOlSsxgMQ',
  facebook: 'guilhermee.puhl',
  instagram: 'guilhermee.puhl',
  twitter: 'guilhermeepuhl'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}
// ser humano 12345678910
// computador 0123456789
changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
