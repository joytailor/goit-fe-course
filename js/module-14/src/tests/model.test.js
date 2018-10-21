import  Model  from '../model';

describe('Model class', () =>{
    beforeEach(()=>{
        const model = new Model(["https://www.youtube.com/watch?v=OPf0YbXqDm0", "https://app.schoology.com/course/1606293611/student_grades"])
    })
    it('Should create model instance', ()=>{
        const model = new Model();
        expect(model instanceof Model).toBe(true);
    })
    it(`Should check if item's available`), ()=>{
        const item = checkItem("https://www.youtube.com/watch?v=OPf0YbXqDm0")
        expect(item).toBeNull();
    }
    it(`Should check if item isn't available`), ()=>{
        const item = checkItem("https://jestjs.io/docs/en/using-matchers")
        expect(item).toBeDefined();
    }
    it(`Should check if url is valid`), ()=>{
        const item = checkURL("https://jestjs.io/docs/en/using-matchers")
        expect(item).toBeTruthy();
    }
    it(`Should check if url isn't valid`), ()=>{
        const item = checkURL("123")
        expect(item).toBeFalsy();
    }
})


// Should get items from l.s
// Should push item to l.s.
// Should check item's validity
//Should check url's validity
// Should update local storage