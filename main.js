
const filter = () => {
    const filterList = document.getElementById('filter-items');

}

async function displayer() {
    let file = await fetch('./data.json');
    jobs = await file.json()

    for (let job of jobs) {
        const card = document.createElement(`div`);
        card.classList.add('card')
        card.innerHTML = 
        `
        <img class="card__image" src="./${job.logo}" alt="${job.company}" width="65px">`
        const cardTop = document.createElement(`div`);
        cardTop.classList.add('card__top');
        cardTop.innerHTML = 
        `<h3 class="card__tool">${job.company}</h3>`
        
        if (job.new) {
            cardTop.innerHTML += `<div class="card__extra card__new-item">${'New!'}</div>`
        }
        if (job.featured) {
            cardTop.innerHTML += `     
            <div class="card__extra card__featured">${'featured'}</div>`
        }
        card.appendChild(cardTop)
        card.innerHTML +=
        `
        <p class="card__role-level">${job.position}</p>
    
        <ul class="card__description">
          <li><span class="card__time">${job.postedAt}</span></li>
          <li><span class="card__hours">${job.contract}</span></li>
          <li><span class="card__country">${job.location}</span></li>
        </ul>
        `
        const cardExpertise = document.createElement(`div`);
        cardExpertise.classList.add('card__expertise');
        cardExpertise.innerHTML = 
        `
        <span class="card__role">${job.role}</span>
        <span class="card__level">${job.level}</span>
        `
        const requirements = job.languages.concat(job.tools)
        for (let requirement of requirements) {
            cardExpertise.innerHTML += `<span class="card__language">${requirement}</span>`
        }
        card.appendChild(cardExpertise)

        document.getElementById('main').appendChild(card)
    }
 
}

displayer()