const lang=document.querySelector('.languages')
    rus=lang.querySelector('.languages__ru')
    en=lang.querySelector('.languages__en')
    navLogo=document.querySelector('.nav__logo')
    navLinkText=document.querySelectorAll('.nav__link_text')

    homeTitle=document.querySelector('.home__title')
    homeSubTitle=document.querySelector('.home__subtitle')
    homeDesc=document.querySelector('.home__description')
    homeContact=document.querySelector('.home__contact')
    homeScrollName=document.querySelector('.home__scroll-name')

    sectionTitle=document.querySelectorAll('.section__title')
    sectionSubTitle=document.querySelectorAll('.section__subtitle')

    aboutDesc=document.querySelector('.about__description')
    aboutButtonsLabel=document.querySelector('.about__buttons_label')

    developer=document.querySelectorAll('.developer')

    qualificationButtonLabel=document.querySelectorAll('.qualification__button_label')
    qualificationTitle=document.querySelectorAll('.qualification__title')
    qualificationSubTitle=document.querySelectorAll('.qualification__subtitle')

    servicesButtonLabel=document.querySelectorAll('.services__button_label')
    servicesModalItems=document.querySelectorAll('.services__modal-services_label')

    portfolioTitle=document.querySelectorAll('.portfolio__title')
    portfolioDescription=document.querySelectorAll('.portfolio__description')

    contactTitle=document.querySelector('.contact__title')
    contactLabel=document.querySelectorAll('.contact__label')
    contactButtonLabel=document.querySelector('.contact__button_label')

    footerTitle=document.querySelector('.footer__title')
    footerLink=document.querySelectorAll('.footer__link')
    footerCopy=document.querySelector('.footer__copy_label')

    downloadCV=document.getElementById('download_cv')

   
let data= {
    russian:{
        navLogo:'Игорь',
        navLinkText:['Начало','Обо мне','Навыки','Услуги','Портфолио','Контакты'],
        homeTitle:'Привет, я Игорь',
        homeSubTitle:'Frontend-разработчик',
        homeDesc:'Высокий уровень знаний и постоянное совершенствование для качественной работы.',
        homeContact:'Cвязаться со мной',
        sectionTitle:['Обо мне','Навыки','Квалификация','Услуги','Портфолио','Контакты'],
        sectionSubTitle:['Мое представление','Мой технический уровень','Мой персональный путь','Что я предлагаю','Мои недавние проекты','Cвязаться со мной'],
        homeScrollName:'Прокрутить вниз',
        aboutDesc:'Web-разработчик c высоким уровнем мотивации и опытом разработки функциональных и адаптивных веб сервисов.',
        aboutButtonsLabel:'Cкачать резюме',
        developer:'разработчик',
        qualificationButtonLabel:['Образование', 'Работа'],
        qualificationTitle:['Приборостроение','QA инженер','Веб-разработка','Инженер по качеству','Веб-разработчик'],
        qualificationSubTitle:['Балтийский государственный технический университет','Яндекс','Университет ИТМО','ЦНИИ Электроприбор'],
        servicesButtonLabel:'Подробнее',
        servicesModalItems:['Разработка и поддержка пользовательского интерфейса','Разработка веб-страниц','Взаимодействие пользовательских элементов','Верстка сайтов','Разработка серверной части сайтов и веб-приложений','Разработка баз данных','Интеграции с внешними сервисами','API'],
        portfolioTitle:['E-Commerce','Приложение-органайзер','Сайт тренажерного зала','Конвертер валют','Сайт музыкального исполнителя'],
        portfolioDescription:['Онлайн магазин мебели','Современное адаптивное приложение для планирования задач','Одностраничное приложение с информацией о тренажерном зале','Перевод более, чем 30 наименований валют','Сайт исполнителя с музыкальным плеером'],
        contactTitle:'Позвоните мне',
        contactLabel:['Имя*','Email*','Проект','Сообщение*'],
        contactButtonLabel:'Отправить сообщение',
        footerTitle:'Игорь',
        footerLink:['Услуги','Портфолио','Контакты'],
        footerCopy:'Игорь Смирнов. Все права защищены.'
    }
}

rus.addEventListener('click',()=>{
    let attr = rus.getAttribute('language')

    navLogo.textContent=data[attr].navLogo
    navLinkText.forEach((e,i)=>{
        e.textContent=data[attr].navLinkText[i]
    })

    homeTitle.textContent=data[attr].homeTitle
    homeSubTitle.textContent=data[attr].homeSubTitle
    homeDesc.textContent=data[attr].homeDesc
    homeContact.textContent=data[attr].homeContact
    homeScrollName.textContent=data[attr].homeScrollName
   
    sectionTitle.forEach((e,i)=>{
        e.textContent=data[attr].sectionTitle[i]
    })
    sectionSubTitle.forEach((e,i)=>{
        e.textContent=data[attr].sectionSubTitle[i]
    })

    aboutDesc.textContent=data[attr].aboutDesc
    aboutButtonsLabel.textContent=data[attr].aboutButtonsLabel

   developer.forEach(e=>e.textContent=data[attr].developer)

   qualificationButtonLabel.forEach((e,i)=>{
    e.textContent=data[attr].qualificationButtonLabel[i]
   })
   qualificationTitle.forEach((e,i)=>{
    e.textContent=data[attr].qualificationTitle[i]
   })
   qualificationSubTitle.forEach((e,i)=>{
    e.textContent=data[attr].qualificationSubTitle[i]
   })

   servicesButtonLabel.forEach(e=>e.textContent=data[attr].servicesButtonLabel)
   servicesModalItems.forEach((e,i)=>{
    e.textContent=data[attr].servicesModalItems[i]
   })

   portfolioTitle.forEach((e,i)=>{
    e.textContent=data[attr].portfolioTitle[i]
   })
   portfolioDescription.forEach((e,i)=>{
    e.textContent=data[attr].portfolioDescription[i]
   })

   contactTitle.textContent=data[attr].contactTitle
   contactLabel.forEach((e,i)=>{
    e.textContent=data[attr].contactLabel[i]
   })
   contactButtonLabel.textContent=data[attr].contactButtonLabel

   footerTitle.textContent=data[attr].footerTitle
   footerLink.forEach((e,i)=>{
    e.textContent=data[attr].footerLink[i]
   })
   footerCopy.textContent=data[attr].footerCopy

   downloadCV.setAttribute('href', 'https://disk.yandex.ru/i/6QZN2R_Sv5pyRA')
})

