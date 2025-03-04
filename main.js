function displayImage() {
    // Letter Inputs
    const input1_letter = document.getElementById("charInput1").value.toUpperCase();
    const input2_letter = document.getElementById("charInput2").value.toUpperCase();

    // Convert letters to numbers (ASCII values)
    const input1_number = input1_letter.charCodeAt(0); // Converts the letter to a number (e.g., 'A' is 65)
    const input2_number = input2_letter.charCodeAt(0); // Converts the letter to a number (e.g., 'B' is 66)

    // Get all image elements
    const imgElement1 = document.getElementById("displayedImage1");
    const imgElement2 = document.getElementById("displayedImage2");
    const imgElement3 = document.getElementById("displayedImage3");
    const imgElement4 = document.getElementById("displayedImage4");
    const imgElement5 = document.getElementById("displayedImage5");
    const imgElement6 = document.getElementById("displayedImage6");
    const imgElement7 = document.getElementById("displayedImage7");
    const imgElement8 = document.getElementById("displayedImage8");
    const imgElement9 = document.getElementById("displayedImage9");
    const imgElement10 = document.getElementById("displayedImage10");
    const imgElement11 = document.getElementById("displayedImage11");
    const imgElement12 = document.getElementById("displayedImage12");
    const imgElement13 = document.getElementById("displayedImage13");
    const imgElement14 = document.getElementById("displayedImage14");
    const imgElement15 = document.getElementById("displayedImage15");
    const imgElement16 = document.getElementById("displayedImage16");
    const imgElement17 = document.getElementById("displayedImage17");
    const imgElement18 = document.getElementById("displayedImage18");
    const imgElement19 = document.getElementById("displayedImage19");
    const imgElement20 = document.getElementById("displayedImage20");
    const imgElement21 = document.getElementById("displayedImage21");
    const imgElement22 = document.getElementById("displayedImage22");
    const imgElement23 = document.getElementById("displayedImage23");
    const imgElement24 = document.getElementById("displayedImage24");
    const imgElement25 = document.getElementById("displayedImage25");
    const imgElement26 = document.getElementById("displayedImage26");
    const imgElement27 = document.getElementById("displayedImage27");

    // Hide all images first
    imgElement1.style.display = "none";
    imgElement2.style.display = "none";
    imgElement3.style.display = "none";
    imgElement4.style.display = "none";
    imgElement5.style.display = "none";
    imgElement6.style.display = "none";
    imgElement7.style.display = "none";
    imgElement8.style.display = "none";
    imgElement9.style.display = "none";
    imgElement10.style.display = "none";
    imgElement11.style.display = "none";
    imgElement12.style.display = "none";
    imgElement13.style.display = "none";
    imgElement14.style.display = "none";
    imgElement15.style.display = "none";
    imgElement16.style.display = "none";
    imgElement17.style.display = "none";
    imgElement18.style.display = "none";
    imgElement19.style.display = "none";
    imgElement20.style.display = "none";
    imgElement21.style.display = "none";
    imgElement22.style.display = "none";
    imgElement23.style.display = "none";
    imgElement24.style.display = "none";
    imgElement25.style.display = "none";
    imgElement26.style.display = "none";
    imgElement27.style.display = "none";

    // (AB) if input1 is 'A' (65) and input2 is 'B' (66), then show food
    if (input1_number == 65 && input2_number == 66) {
        imgElement1.src = "photosfortwoinput/fc1.JPG";
        imgElement1.style.display = "block"; // Show the image
    }
    // (BA) if input1 is vice versa, then, show christine
    else if (input1_number == 66 && input2_number == 65) {
        imgElement2.src = "photosfortwoinput/fc1v.JPG";
        imgElement2.style.display = "block"; // Show the image
    }
    // (CD) if input1 is 'C' (67) and input2 is 'D' (68), then show food
    else if (input1_number == 67 && input2_number == 68) {
        imgElement3.src = "photosfortwoinput/fc2.JPG";
        imgElement3.style.display = "block"; // Show the image
    }
    // (DC) if input1 is vice versa, then show christine
    else if (input1_number == 68 && input2_number == 67) {
        imgElement4.src = "photosfortwoinput/fc2v.JPG";
        imgElement4.style.display = "block"; // Show the image
    }
    // (EF) if input1 is 'E' (69) and input2 is 'F' (70), then show food
    else if (input1_number == 69 && input2_number == 70) {
        imgElement5.src = "photosfortwoinput/fc3.JPG";
        imgElement5.style.display = "block"; // Show the image
    }
    // (FE) if input1 is vice versa, then, show christine
    else if (input1_number == 70 && input2_number == 69) {
        imgElement6.src = "photosfortwoinput/fc3v.JPG";
        imgElement6.style.display = "block"; // Show the image
    }
    // (GH)) if input1 is 'G' (71) and input2 is 'H' (72), then show food
    else if (input1_number == 71 && input2_number == 72) {
        imgElement7.src = "photosfortwoinput/fc4.JPG";
        imgElement7.style.display = "block"; // Show the image
    }
    // (HG) if input1 is vice versa, then show christine
    else if (input1_number == 72 && input2_number == 71) {
        imgElement8.src = "photosfortwoinput/fc4v.JPG";
        imgElement8.style.display = "block"; // Show the image
    }
    // (IJ) if input1 is 'I' (73) and input2 is 'J' (74), then show food
    else if (input1_number == 73 && input2_number == 74) {
        imgElement9.src = "photosfortwoinput/fc5.JPG";
        imgElement9.style.display = "block"; // Show the image
    }
    // (JI) if input1 is vice versa, then, show christine
    else if (input1_number == 74 && input2_number == 73) {
        imgElement10.src = "photosfortwoinput/fc5v.JPG";
        imgElement10.style.display = "block"; // Show the image
    }
    // (KL) if input1 is 'K' (75) and input2 is 'L' (76), then show food
    else if (input1_number == 75 && input2_number == 76) {
        imgElement11.src = "photosfortwoinput/fc6.JPG";
        imgElement11.style.display = "block"; // Show the image
    }
    // (LK) if input1 is vice versa, then show christine
    else if (input1_number == 76 && input2_number == 75) {
        imgElement12.src = "photosfortwoinput/fc6v.JPG";
        imgElement12.style.display = "block"; // Show the image
    }
    // (MN) if input1 is 'M' (77) and input2 is 'N' (78), then show food
    else if (input1_number == 77 && input2_number == 78) {
        imgElement13.src = "photosfortwoinput/fc7.JPG";
        imgElement13.style.display = "block"; // Show the image
    }
    // (NM) if input1 is vice versa, then, show christine
    else if (input1_number == 78 && input2_number == 77) {
        imgElement14.src = "photosfortwoinput/fc7v.JPG";
        imgElement14.style.display = "block"; // Show the image
    }
    // (OP)) if input1 is 'O' (71) and input2 is 'P' (72), then show food
    else if (input1_number == 79 && input2_number == 80) {
        imgElement15.src = "photosfortwoinput/fc8.JPG";
        imgElement15.style.display = "block"; // Show the image
    }
    // (PO) if input1 is vice versa, then show christine
    else if (input1_number == 80 && input2_number == 79) {
        imgElement16.src = "photosfortwoinput/fc8v.JPG";
        imgElement16.style.display = "block"; // Show the image
    }
    // (QR) if input1 is 'Q' (81) and input2 is 'R' (82), then show food
    else if (input1_number == 81 && input2_number == 82) {
        imgElement17.src = "photosfortwoinput/fc9.JPG";
        imgElement17.style.display = "block"; // Show the image
    }
    // (RQ) if input1 is vice versa, then, show christine
    else if (input1_number == 82 && input2_number == 81) {
        imgElement18.src = "photosfortwoinput/fc9v.JPG";
        imgElement18.style.display = "block"; // Show the image
    }
    // (ST)) if input1 is 'S' (83) and input2 is 'T' (84), then show food
    else if (input1_number == 83 && input2_number == 84) {
        imgElement19.src = "photosfortwoinput/fc10.JPG";
        imgElement19.style.display = "block"; // Show the image
    }
    // (TS) if input1 is vice versa, then show christine
    else if (input1_number == 84 && input2_number == 83) {
        imgElement20.src = "photosfortwoinput/fc10v.JPG";
        imgElement20.style.display = "block"; // Show the image
    }
    // (UV)) if input1 is 'U' (85) and input2 is 'V' (86), then show food
    else if (input1_number == 85 && input2_number == 86) {
        imgElement21.src = "photosfortwoinput/fc11.JPG";
        imgElement21.style.display = "block"; // Show the image
    }
    // (VU) if input1 is vice versa, then show christine
    else if (input1_number == 86 && input2_number == 85) {
        imgElement22.src = "photosfortwoinput/fc11v.JPG";
        imgElement22.style.display = "block"; // Show the image
    }
    // (WX) if input1 is 'W' (87) and input2 is 'X' (88), then show food
    else if (input1_number == 87 && input2_number == 88) {
        imgElement23.src = "photosfortwoinput/fc12.JPG";
        imgElement23.style.display = "block"; // Show the image
    }
    // (XW) if input1 is vice versa, then, show christine
    else if (input1_number == 88 && input2_number == 87) {
        imgElement24.src = "photosfortwoinput/fc12v.JPG";
        imgElement24.style.display = "block"; // Show the image
    }
    // (YZ) if input1 is 'Y' (88) and input2 is 'Z' (90), then show food
    else if (input1_number == 89 && input2_number == 90) {
        imgElement25.src = "photosfortwoinput/fc13.jpeg";
        imgElement25.style.display = "block"; // Show the image
    }
    // (ZY) if input1 is vice versa, then show christine
    else if (input1_number == 90 && input2_number == 89) {
        imgElement26.src = "photosfortwoinput/fc13v.jpeg";
        imgElement26.style.display = "block"; // Show the image
    }
    // if inputs are neither, show fail image
    else {
        imgElement27.src = "photosfortwoinput/fail.JPG";
        imgElement27.style.display = "block"; // Show the image
    }
}