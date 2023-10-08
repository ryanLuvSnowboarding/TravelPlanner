//user_ratings_total: ratingCount
//vicinity: address

import config from "../../../config";

function PhotoExtract(place) {
  // Extracted photo_reference from your data
  // const photoReference = "ATJ83ziGeKVGBfKcIOYY3iJK-ptb9hIa7J6kExl7exBNvcil-fwGvKBPn61NBLPgicz6xAfcOawkcLdRpBNxSifdBdVRJy-HBUPsplEA32T-_vNlqH5cpsNDHLw-T4n51BHuc1XFyp0BK_8w7aAHasDpTk5OkEHL70MPImgiGLHWkuQiyEB7";
  const photoReference = place;
  // Specify the desired width for the photo
  const maxWidth = 300; // Replace with your desired width

  // Your Google Maps API key (if required)
  const apiKey = config.googleApikey;

  // Construct the URL for the photo
  const photoUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=${maxWidth}&photoreference=${photoReference}&key=${apiKey}`;

  // Log the photo URL to the console (you can use it for displaying or downloading)
  console.log(photoUrl);
  return photoUrl;
}

export default PhotoExtract;
