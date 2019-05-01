import getApplicant from '../src/get-product';
const test = QUnit.test;


test('Creates potential cat adopter from form data', (assert) => {
    //Arrange
    // Set up your parameters and expectations
    const expected = {
        name: 'Claire',
        meowTime: true,
        die: 9,
        lives: 9,
    };

    const formData = new FormData();
    formData.set('name', expected.name);
    formData.set('meow-time', 'yes');
    formData.set('die', 9);
    formData.set('lives', 9);

    //Act 
    // Call the function you're testing and set the result to a const
    const applicant = getApplicant(formData);
    //Assert
    assert.deepEqual(applicant, expected);
});