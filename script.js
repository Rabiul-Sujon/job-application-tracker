 let currentFilter = 'all';
 // jobs array
 let jobs = [
    {
        id : 1,
        companyName : 'Airbnb',
        position : 'React Native Developer',
        location : 'Remote',
        type : 'Full time',
        salary :'$170000-$190000',
        status : 'Not Applied',
        description : 'Build and maintain cross-platform mobile features used by millions of global users.',
    },
    { 
        id: 2, 
        companyName: 'Spotify', 
        position: 'Mobile Engineer', 
        location: 'Remote', 
        type: 'Part Time', 
        salary: '$70k-90k', 
        status: 'Not Applied', 
        description: 'Develop high-performance mobile experiences for music streaming.',
    },
    { 
        id: 3, 
        companyName: 'Revolut', 
        position: 'Mobile Developer', 
        location: 'London, UK', 
        type: 'Full Time', 
        salary: '$150k-190k', 
        status: 'Not Applied', 
        description: 'Create financial technology mobile applications with real-time systems.', 
    },
    { 
        id: 4, 
        companyName: 'Shopify', 
        position: 'App Developer', 
        location: 'Ottawa, CA', 
        type: 'Full Time', 
        salary: '$110k-130k', 
        status: 'Not Applied', 
        description: 'Build scalable mobile commerce applications for merchants.',
    },
    {
        id: 5,
        companyName: "Coinbase",
        position: "Senior RN Engineer",
        location: "On-site",
        type: "Full Time",
        salary: "$130000-175000",
        status: "Not Applied",
        description: "Secure crypto mobile systems.",
        
      },
      {
        id: 6,
        companyName: "Uber",
        position: "Mobile Engineer",
        location: "Hybrid",
        type: "Full Time",
        salary: "$133000-145000",
        status: "Not Applied",
        description: "Ride sharing mobile systems.",
        
      },
      {
        id: 7,
        companyName: "Pinterest",
        position: "App Engineer",
        location: "Remote",
        type: "Full Time",
        salary: "$140000-175000",
        status: "Not Applied",
        description: "Performance focused mobile UI.",
        
      },
      {
        id: 8,
        companyName: "PayPal",
        position: "React Native Developer",
        location: "Hybrid",
        type: "Full Time",
        salary: "$140000-155000",
        status: "Not Applied",
        description: "Secure payment systems.",
        
      },
    ]
  

// 1.creating function to push the jobs in HTML-id
function injectJobs(listToRender = jobs){
    const jobList = document.getElementById('job-list');

    let interviewCount = 0;
    let rejectedCount = 0;

    for (let job of jobs) {
        if (job.status === 'interview') interviewCount++;
        else if (job.status === 'rejected') rejectedCount++;
    }

    // Update Dashboard 
    document.getElementById('total-count').innerText = jobs.length;
    document.getElementById('interview-count').innerText = interviewCount;
    document.getElementById('rejected-count').innerText = rejectedCount;

    // count job tab by tab
     const countSpan = document.getElementById('showing-count-text');
        if (countSpan) {
        countSpan.innerText = `${listToRender.length} Jobs`;
    }

    //2. checking the empty list
    if(listToRender.length === 0){
        jobList.innerHTML = `
            <div class="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-200">
                <img src="/jobs.png" alt="png image" class="mx-auto mb-4 w-48">
                <h3 class="text-xl font-bold text-gray-400">No Jobs Available</h3>
            </div>`;
            return; //if empty stop here.
    }

// 3. creating space to hold HTML.
let htmlStorage = '';

//  4. the loop to check every jobs in list.
for(let job of listToRender){

    // 5.injecting the HTML from js.
   htmlStorage += `
        <div class="bg-white rounded-2xl shadow-sm p-8 mb-6">
            
            <div class="flex justify-between">
                <div>
                    <h2 class="text-xl font-bold text-[#002C5C]">${job.companyName}</h2>
                    <p class="font-semibold text-[#64748B]">${job.position}</p>
                </div>
                
                <button onclick="deleteCard(${job.id})"class="p-2 hover:text-error">
                    <i class="fa-regular fa-trash-can text-lg"></i>
                </button>
            </div>

            <div class="flex items-center gap-2 text-[#94A3B8] text-sm mt-3">
                <span>${job.location}</span> 
                <span class="text-lg">&bull;</span>
                <span>${job.type}</span> 
                <span class="text-lg">&bull;</span>
                <span>${job.salary}</span>
            </div>

            <div class="mt-4">
               <span class="bg-[#EEF4FF] text-[#355D9B] px-4 py-1.5 rounded-md text-xs font-bold uppercase">
                ${job.status}
               </span>
            </div>

            <p class="text-[#475569] text-sm mt-3">
                ${job.description}
            </p>

            <div class="mt-6 flex gap-3">
                <button onclick="updateStatus(${job.id}, 'interview')" class="btn btn-outline btn-success btn-sm px-6 border-2 font-bold rounded-lg hover:text-white">
                    INTERVIEW
                </button>
                <button onclick="updateStatus(${job.id}, 'rejected')" class="btn btn-outline btn-error btn-sm px-6 border-2 font-bold rounded-lg hover:text-white">
                    REJECTED
                </button>
            </div>

        </div>`;
}
jobList.innerHTML = htmlStorage;
// console.log('injection done')

}

// function for job id new status.
function updateStatus(id, newStatus){
    for(let job of jobs){
        if(job.id === id){
            job.status = newStatus;
        }
    }
    // Instead of showing ALL, show jobs on current filter.
    filteredJobs(currentFilter); 
}
injectJobs()


// function to delete by trashbin icon from list.
function deleteCard(id) {
    console.log("Delete requested for Job ID:", id);
    jobs = jobs.filter(function(job) {
        return job.id !== id;
    });

    injectJobs();
}

function filteredJobs(category){
    currentFilter = category; // Remember what i clicked.
    
    if(category === 'all'){
        injectJobs(jobs);
        return;
    }
    const filteredList = jobs.filter(job => job.status.toLowerCase() === category.toLowerCase());
    injectJobs(filteredList);
}
injectJobs();






