let QualificationRadios = document.querySelectorAll( 'input[name=Qualification]' )
let QualificationContainer = document.querySelector( '.qualification-container' )
let ssc = `
    <div>
        <label>SSC QUALIFICATION DETAILS :</label>
        <input type="text" placeholder="Enter name of school">
        <input type="text" placeholder="Percentage">
        <input type="number" placeholder="Year of passing">
    </div>
    `
let hsc = `
    <div>
        <label>HSC QUALIFICATION DETAILS :</label>
        <input type="text" placeholder="Enter name of school">
        <input type="text" placeholder="Percentage">
        <input type="number" placeholder="Year of passing">
    </div>
`

let graduation = `
    <div>
        <label>GRADUATION QUALIFICATION DETAILS :</label>
        <input type="text" placeholder="Enter name of school">
        <input type="text" placeholder="Percentage">
        <input type="number" placeholder="Year of passing">
    </div>
`

let postGraduation = `
<div>
    <label>POST GRADUATION QUALIFICATION DETAILS :</label>
    <input type="text" placeholder="Enter name of school">
    <input type="text" placeholder="Percentage">
    <input type="number" placeholder="Year of passing">
</div>
`

QualificationRadios.forEach( radio => {

    radio.addEventListener( 'change', checkQualification )

} )

function checkQualification ( e ) {

    let value = e.target.value
    let QualificationInputs;

    if ( value == 'Graduate' ) {
        QualificationInputs = `${ ssc }${ hsc }${ graduation }`
    } else if ( value == 'Under-Graduate' ) {
        QualificationInputs = `${ ssc }${ hsc }`
    } else if ( value == 'Post-Graduate' ) {
        QualificationInputs = `${ ssc }${ hsc }${ graduation }${ postGraduation }`
    }

    QualificationContainer.innerHTML = QualificationInputs
}