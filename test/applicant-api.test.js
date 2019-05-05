import applicantApi from '../src/applicant-api.js';
const test = QUnit.test;

QUnit.module('applicant api');

applicantApi.storage = sessionStorage;
const testStorage = sessionStorage;

test('round-trip applicant', (assert) => {
    testStorage.removeItem('applicants');
    //Arrange
    const applicant = { name: 'cat' };

    //Act 
    applicantApi.save(applicant);
    const result = applicantApi.get();
    
    //Assert
    assert.deepEqual(result, applicant);
});

test('no applicants in local storage returns empty array', assert => {
    testStorage.removeItem('applicants');
    const expected = [];

    const applicants = applicantApi.getAll();

    assert.deepEqual(applicants, expected);

});

test('two saves return array with two items', (assert) => {
    testStorage.removeItem('applicants');

    //arrange
    const applicant1 = { name: 'cat1' };
    const applicant2 = { name: 'cat2' };
    const expected = [applicant1, applicant2];

    applicantApi.save(applicant1);
    applicantApi.save(applicant2);

    //act
    const applicants = applicantApi.getAll();

    //assert
    assert.deepEqual(applicants, expected);
    

});