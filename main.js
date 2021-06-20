var images = 
["https://res.cloudinary.com/aarnacloud/image/upload/v1624201110/Family%20book/438-4381906_be-thankful-clip-art-clipart-free-download-family_v66mo7.jpg",  
"https://res.cloudinary.com/aarnacloud/image/upload/v1624201843/Family%20book/IMG_0328_mz3cuz.jpg", 
"https://res.cloudinary.com/aarnacloud/image/upload/v1624201851/Family%20book/IMG_0369_m0rie0.jpg", 
"https://res.cloudinary.com/aarnacloud/image/upload/v1624201853/Family%20book/IMG_0402_utdgkz.jpg", 
"https://res.cloudinary.com/aarnacloud/image/upload/v1624201849/Family%20book/IMG_0355_k2eayp.jpg"];

var names = ["Family Book", "Praveen Kushwaha", "Jyoti Kushwaha", "Aarna Kushwaha", "Atharva Kushwaha"];


var i = 0;

function update()
{
    i++;
    var number_of_family_members_in_array = 4;
    if(i > number_of_family_members_in_array)
    {
        i = 0;
    }

    var updateImages = images[i];
    var updateNames = names[i];

    document.getElementById("family_member_image").src = updateImages;
    document.getElementById("family_member_name").src = updateNames;
}