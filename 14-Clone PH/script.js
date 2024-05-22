const mileStonesData = JSON.parse(jsonData).data

// console.log(mileStoneData)
function loadMilestones() {
  const milestones = document.querySelector('.milestones')
  milestones.innerHTML = mileStonesData.map((milestone) => {
    return ` <div class="milestone border-b">
              <div class="flex">
                <div class="checkbox">
                  <input type="checkbox" /></div>
                <div onClick=openMilestone(this,${milestone._id})>
                  <p>
                  ${milestone.name}
                    <span><i class="fas fa-chevron-down"></i></span>
                  </p>
                </div>
              </div>
              <div class="hidden_panel">
              ${milestone.modules.map((module) =>{
                return ` 
                <div class="module border-b">
                  <p>${module.name}</p>
                </div>`
              }).join("")}
              </div>
            </div>`
  }).join("")
}

function openMilestone(milestoneCon,id) {

  const currentSection=milestoneCon.parentNode.nextElementSibling;

  const showSection=document.querySelector(".show")
  if(!currentSection.classList.contains("show") && showSection){
    showSection.classList.remove("show")
  }

  currentSection.classList.toggle("show")

  modifyMilestone(id)
} 

function modifyMilestone(id){
  const mImg=document.querySelector(".milestoneImage");
  const mTitle=document.querySelector(".title");
  const mDetails=document.querySelector(".details");

  console.log(mileStonesData[id].image);

  mImg.src=mileStonesData[id].image;
  mTitle.innerHTML=mileStonesData[id].name;
  mDetails.innerText=mileStonesData[id].description;

}

loadMilestones()