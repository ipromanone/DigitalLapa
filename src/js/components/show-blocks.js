
let butt = document.getElementById('butt');

if(document.getElementById('butt')) {
    document.getElementById('butt').addEventListener('click', hideDivs);
function hideDivs()
{
    document.getElementById('liRight3').style.display = 'inline-block';
    document.getElementById('liRight4').style.display = 'inline-block';
    document.getElementById('liRight5').style.display = 'inline-block';
    document.getElementById('liRight6').style.display = 'inline-block';
    document.getElementById('liRight7').style.display = 'inline-block';
    document.getElementById('liRight8').style.display = 'inline-block';
    document.getElementById('liRight9').style.display = 'inline-block';
    document.getElementById('liRight10').style.display = 'inline-block';
    this.style.display = 'none';
};
}



