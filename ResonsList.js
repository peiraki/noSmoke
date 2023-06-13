const reasons50 = [
    'Lung Cancer',
    'Heart Disease',
    'Diabetes',
    'Liver Cancer',
    'Erectile Dysfunction',
    'Ectopic Pregnancy',
    'Vision Loss',
    'Tuberculosis',
    'Rheumatoid Arthritis',
    'Colorectal Cancer',
    'Secondhand Smoke',
    'Medical Care',
    'Loss of Years of Life',
    'Stroke',
    'Bladder Cancer',
    'Cervical Cancer',
    'Immune System',
    'Cleft Palates',
    'Cancer Treatment',
    'Increased Illness',
    'Youthful Appearance',
    'Money',
    'Time',
    'Smells',
    'Family',
    'Animal Testing',
    'Better Sleep',
    'Stronger Bones',
    'Hearing Loss',
    'Vacations',
    'Psoriasis',
    'Warmer Hands and Feet',
    'Less Caffeine',
    'Complications from Oral Contraceptives',
    'Crohn’s Disease',
    'Acid Reflux',
    'Eat Less',
    'Interior Design',
    'Hair',
    'Pets',
    'Life Insurance',
    'Faster Healing Wounds',
    'Sudden Infant Death Syndrome',
    'Menopause',
    'Increased Sperm',
    'Relationships',
    'Dementia',
    'Fertility',
    'Alzheimer’s Disease',
    'Lupus'
]
const reasons50Desc = [
    'Smoking is the number one cause of lung cancer. Smokers are up to 30 times more likely to develop lung cancer. The longer you smoke, the higher your risk. Visit the Cancer Center at UnityPoint Health - Trinity.',
    'One out of every five heart disease deaths is directly related to smoking. The risk of developing this disease increases by two to four times for smokers.',
    'Smoking causes type 2 diabetes. People who smoke are 30 to 40 percent more likely to develop type 2 diabetes than nonsmokers. For those who have diabetes, smoking makes this disease even harder to control.',
    'Smoking increases your risk of developing liver cancer. While not directly related, smoking accompanied with other disorders like hepatitis C or B dramatically increases the risk in people with the same conditions who don’t smoke.',
    'Smoking builds up plaque in the arteries and obstructs blood flow. This, in turn, makes getting blood from one place to another more complicated. Both men and women can suffer from this complication making sexual relations more difficult.',
    'An ectopic pregnancy is a pregnancy that occurs somewhere other than the womb. Most commonly, it happens when an egg is fertilized in the fallopian tube. This happens in about 1 in 100 pregnancies. Around 11 percent of these types of pregnancies can be directly associated to smoking.',
    'Studies have shown that smoking increases the risk of cataracts, glaucoma, diabetic retinopathy and Dry Eye Syndrome.',
    'If you have been treated for tuberculosis in the past, smoking doubles your chance of getting tuberculosis again, studies have shown. This condition is called recurrent TB.',
    'Smoking increases your likelihood of developing rheumatoid arthritis. In those who are already at a risk for developing this disease, smoking makes it even higher.',
    'Those who smoke are more likely to die from colorectal cancer.',
    'Secondhand smoke is classified as a cancer causing agent by the Environmental Protection Agency, the U.S. National Toxicology Program and the International Agency for Research on Cancer. Each year in the United States, secondhand smoke causes 42,000 deaths from heart disease, 3,400 deaths from lung cancer, worsening asthma and between 150,000 and 300,000 lower respiratory tract infections.',
    'It was reported that $289 billion dollars was spent on medical care and other economic costs for smokers in one year in the U.S. alone.',
    'People who smoke lose more than 10 years off of their life expectancy. Studies have shown that every cigarette takes 11 minutes off of your life.',
    'Smoking makes the blood thicker and more likely to clot, increases the buildup of plaque and can damage blood vessels in the brain causing strokes. Secondhand smoke causes strokes in nonsmokers.',
    'The number one risk factor for bladder cancer is smoking. It causes half of all bladder cancers. People who smoke are three times more likely to develop bladder cancer.',
    'The risk of developing cervical cancer doubles in women who smoke. Smoking also harms the immune system and decreases the body’s ability to fight off HPV.',
    'Smoking depresses antibodies and cells in the body that are supposed to help fight off invaders. ',
    'Smoking during pregnancy increases the likelihood of having a baby with a cleft palate.',
    'Smoking increases the chances that a cancer treatment will fail. The longer the period between quitting smoking and starting cancer treatment, the better the treatment works.',
    'Smoking increases your chances of picking up common illnesses. The symptoms for these illnesses are more severe if you are a smoker.',
    'Smoking makes your skin look older and more haggard. It also discolors your fingernails and teeth.',
    'Buying cigarettes costs money. No longer having to purchase cigarettes will let you spend the money on other things or save it. If you smoke a pack of cigarettes a day, and you buy them for the average price of $5.31 a pack, you will save $159.30 in one month. After one year, you will have saved $1,938.15. After 20 years, it’s estimated that you will have saved over $71,000. ',
    'Smoking breaks take time away from other activities. Quitting alleviates the worry about when you will be able to smoke next and how long you will be absent from work, family or social events to smoke.',
    'Right now, everything in your life smells like smoke. Quitting will make your clothes, kids, car and house smell better. Your sense of smell will also get better. Soon, you will be able to really smell things like flowers and food.',
    'Secondhand smoke is dangerous. It has been proven to cause many illnesses and diseases. Quitting will keep your family healthy in the long run. You don’t want to be the reason a family member becomes sick.',
    'Animals were used to test the dangers of smoking in the U.S. The animals tested include mice, dogs and monkeys.',
    'Smoking keeps you from falling into a deep sleep. Studies have shown that smokers feel unrested in the morning.',
    'Studies have shown that smoking increases the risk of osteoporosis and bone fractures. ',
    'People who smoke are 70 percent more likely to suffer from hearing loss.',
    'England, France, New Zealand and Puerto Rico now only offer smoke-free bars and restaurants.',
    'Smoking can increase the risk of developing psoriasis. For those who have psoriasis, smoking can often make the symptoms worse.',
    'Poor circulation is another symptom of smoking. Poor circulation can cause cold hands and feet. If you quit smoking, your body will feel warmer as circulation returns to normal.',
    'When you smoke, your body requires almost twice as much caffeine as when you don’t smoke. The caffeine levels in nonsmokers lasted for 6 hours while the levels in smokers only lasted for 3.5 hours according to a study.',
    'Smoking while taking some forms of contraceptives increases a woman’s risk of cardiovascular side effects. Women who smoke can also experience pain in the stomach, side or abdomen as well as yellowing of the eyes and skin.',
    'People who smoke have a higher risk of developing Crohn’s Disease. Those who already deal with this disease will have more severe complications and a higher risk of surgery due to smoking.',
    'Smoking can cause more frequent heartburn. Smokers who have tried to reduce acid reflux with medications should consider quitting smoking.',
    'Studies have shown that smoking makes you eat more. Smokers tend to eat foods with more saturated fat and cholesterol and consume more alcohol. They also didn’t have much fiber, vitamin C or vitamin E in their diets.',
    'Nicotine and tar from cigarette smoke creates yellow stains on the walls of a smoker’s home. These stains are often extremely hard to remove. ',
    'Smoking can cause premature baldness and lower the age at which hair begins to turn gray.',
    'Not only can secondhand smoke harm your family and kids, but it can also hurt your pets. Studies have shown that secondhand smoke can cause oral cancer and lymphoma in cats, lung and nasal cancer in dogs, and lung cancer in birds.',
    'Life insurance rates are 20-30% lower for nonsmokers. ',
    'Smoking causes wounds to heal slower because it reduces the blood flow to the skin.',
    'The cancer causing chemicals in secondhand cigarette smoke also affect infants, damaging their lungs, hearts and brains.',
    'Women who smoke have more hot flashes as they proceed through menopause. Other research has linked early menopause and worse symptoms to smoking.',
    'Smoking damages sperm and makes them less able to fertilize an egg.',
    'Many dating sites have taken polls about whether or not people would date a smoker. A Match.com poll discovered that 58 percent of their site’s users would not date a person who smoked.',
    'Smoking is a significant factor for vascular dementia.',
    'Women who smoke face a faster loss rate for their fertile eggs when they smoke.',
    'The mental decline in elderly smokers is five time faster than in elderly nonsmokers. Researchers have also found that tobacco can speed up the onset of Alzheimer’s disease.',
    'Studies have shown that smoking increases the risk of developing lupus, also known as lupus erythematosus. Quitting was shown to eliminate the risk.'
]


let reasonN = 0;

function dropDownReasons() {
    console.log('hi')
    infoBox.classList.toggle('heightunset')
}
const reasonNums = document.querySelectorAll('#reasonsList li');

reasonNums.forEach(num => {
    document.querySelector('#reasonsList li:nth-child(1)').classList.add('reasonBgColor')
    infoBox.innerHTML = `
            <h3><span class="reasonBgColor">${reasons50[0]}</span></h3>
            
            <p> ${reasons50Desc[0]}</p>
            <div class="prevNext">
                        <div class="prev" onclick="prevReason()">Prev Reason</div>
                        <div class="Next" onclick="nextReason()">Next Reason</div>
                    </div>
            `
    let number = num.innerText
        num.addEventListener('click', ()=> {
            infoBox.innerHTML = `
                <h3><span class="reasonBgColor">${reasons50[number-1]}</span></h3>
                
                <p> ${reasons50Desc[number-1]}</p>
                <div class="prevNext">
                    <div class="prev" onclick="prevReason()">Prev Reason</div>
                    <div class="Next" onclick="nextReason()">Next Reason</div>
                </div>
                `
            reasonN = number-1
            console.log(reasonN)
        })

        num.addEventListener('click', ()=> {
            document.querySelector('.reasonBgColor').classList.remove('reasonBgColor')
            num.classList.toggle('reasonBgColor')
        })

        // reasonPrev.addEventListener('click', ()=>{
        //     if(number > 1){
        //         number -= 1;
        //         infoBox.innerHTML = `
        //     <h3>Reason ${number} - <span class="reasonBgColor">${reasons50[number]}</span></h3>
            
        //     <p> Random Reason Description</p>.
        //     <div class="prevNext">
        //                 <div class="prev" onclick="prevReason()">Prev Reason</div>
        //                 <div class="Next" onclick="nextReason()">Next Reason</div>
        //             </div>
        //     `
        //     }
        // })
        // reasonNext.addEventListener('click', ()=>{
        //     number = Number(num.innerText)
        //     if(number > 1){
        //         number = Number(number) + 1;
        //         infoBox.innerHTML = `
        //     <h3>Reason ${number} - <span class="reasonBgColor">${reasons50[number]}</span></h3>
            
        //     <p> Random Reason Description</p>.
        //     <div class="prevNext">
        //                 <div class="prev" onclick="prevReason()">Prev Reason</div>
        //                 <div class="Next" onclick="nextReason()">Next Reason</div>
        //             </div>
        //     `
        //     }
        // })









        // if(document.querySelector('.reasonBgColor')){
        //     document.querySelector('.reasonBgColor').classList.remove('reasonBgColor')
        // }else {
        //     num.classList.add('reasonBgColor')
        // }
    if(num){
        infoBox.classList.add('heightunset')
    }
});

// function prevReason() {
//     number -= 1;
//     num.addEventListener('click', ()=> {
//         infoBox.innerHTML = `
//         <h3>Reason ${number} - <span class="reasonBgColor">${reasons50[number]}</span></h3>
        
//         <p> Random Reason Description</p>
//         <div class="prevNext">
//                 <div class="prev" onclick="prevReason()">Prev Reason</div>
//                 <div class="Next" onclick="nextReason()">Next Reason</div>
//         </div>
//         `
//     })
// }
// function nextReason() {
//     number += 1;
//     num.addEventListener('click', ()=> {
//         infoBox.innerHTML = `
//         <h3>Reason ${number} - <span class="reasonBgColor">${reasons50[number]}</span></h3>
        
//         <p> Random Reason Description</p>
//         <div class="prevNext">
//                 <div class="prev" onclick="prevReason()">Prev Reason</div>
//                 <div class="Next" onclick="nextReason()">Next Reason</div>
//             </div>
//         `
//     })
// }

function nextReason() {
    reasonN += 1;
    if(reasonN >= 49){
        reasonN = 49
    }
    infoBox.innerHTML = `
            <h3><span class="reasonBgColor">${reasons50[reasonN]}</span></h3>
            
            <p> ${reasons50Desc[reasonN]}</p>
            <div class="prevNext">
                        <div class="prev" onclick="prevReason()">Prev Reason</div>
                        <div class="Next" onclick="nextReason()">Next Reason</div>
                    </div>
            `
    document.querySelector('.reasonBgColor').classList.remove('reasonBgColor')
    document.querySelector(`#reasonsList li:nth-child(${reasonN+1})`).classList.add('reasonBgColor')
           
}

function prevReason() {
    reasonN -= 1;
    if(reasonN <= 0){
        reasonN = 0
    }
    infoBox.innerHTML = `
            <h3><span class="reasonBgColor">${reasons50[reasonN]}</span></h3>
            
            <p> ${reasons50Desc[reasonN]}</p>
            <div class="prevNext">
                        <div class="prev" onclick="prevReason()">Prev Reason</div>
                        <div class="Next" onclick="nextReason()">Next Reason</div>
                    </div>
            `
    document.querySelector('.reasonBgColor').classList.remove('reasonBgColor')
    document.querySelector(`#reasonsList li:nth-child(${reasonN+1})`).classList.add('reasonBgColor')
           
}