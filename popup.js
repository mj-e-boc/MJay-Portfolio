const projects =[
        {
        id: 1,
        mobileImage: 'Images/mobileprojects/project1Img.svg',
        desktopImage: 'Images/desktop/image1.svg',
        title:'Tonic',
        Specs: ['Canopy', 'Back EndDev', '2015'],
        statement: 'A daily selection of privately personalised reads; no accounts or sign-ups required',
        languages: ['HTML','CSS', 'javaScript'],
        linkToLiveVersion:'https://mj-e-boc.github.io/',
        tagsImg: './Images/icons/CounterDot.svg',
        linkToSource:"#",
        },

        {
            id: 2,
            mobileImage: 'Images/mobileprojects/project2Img.svg',
            desktopImage: 'Images/desktop/image2.svg',
            title:'Multi-Post',
            Specs: ['Canopy', 'Back EndDev', '2015'],
            statement: 'A daily selection of privately personalised reads; no accounts or sign-ups required',
            languages: ['HTML','CSS', 'javaScript'],
            linkToLiveVersion:'https://mj-e-boc.github.io/',
            tagsImg: './Images/icons/CounterDot.svg',
            linkToSource:"#",
            },

            {
                id: 3,
                mobileImage: 'Images/mobileprojects/project3Img.svg',
                desktopImage: 'Images/desktop/image3.svg',
                title:'Tonic',
                Specs: ['Canopy', 'Back EndDev', '2015'],
                statement: 'A daily selection of privately personalised reads; no accounts or sign-ups required',
                languages: ['HTML','CSS', 'javaScript'],
                linkToLiveVersion:'#',
                tagsImg: 'Images/icons/CounterDot.svg',
                linkToSource:"#",
                },

                {
                    id: 4,
                    mobileImage: 'Images/mobileprojects/project4Img.svg',
                    desktopImage: 'Images/desktop/image4.svg',
                    title:'Tonic',
                    Specs: ['Canopy', 'Back EndDev', '2015'],
                    statement: 'A daily selection of privately personalised reads; no accounts or sign-ups required',
                    languages: ['HTML','CSS', 'javaScript'],
                    linkToLiveVersion:'https://mj-e-boc.github.io/',
                    tagsImg: './Images/icons/CounterDot.svg',
                    linkToSource:"#",
                    },


];

const projectsContainer = document.querySelector('.projectsContainer');
const Card = (data) =>{
    const card = document.createElement('div');
    if(data.id % 2 != 0){
        card.className='project1';
    }else{
        card.className='project pro2';
    }

    const img = document.createElement('img');
    img.setAttribute('src', data.img);
    img.className = ''



}

