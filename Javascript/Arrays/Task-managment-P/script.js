// یک پروژه تسک منیجمنت پیاده سازی کنید

// در این سامانه مدیر می تواند به کارمندان خود تسک های مختلفی بدهد
// به عنوان مثال می تواند به آقای محمد وظیفه خاصی را اعمال کند

// یک ساختار داشته باشید که داخل آن 4 کارمند موجود بوده و هر کارمند وظایفی را بر عهده داشته باشند
// سپس از کاربر (مدیر) اسم یک تسک را دریافت کرده و همچنین اسم کارمندی را که قصد اضافه کردن تسک به آن دارد
// دریافت کنید
// و سپس تسک مورد نظر مدیر را به کارمند مورد نظرش اضافه کرده و لیست را در کنسول نمایش دهید

let Employee = prompt("Enter the name of Employee : ");
let taskName = prompt("Enter a name Task : ");

let taskList = {
  ali: ["designer", "Front end", "html"],
  Amir: ["js", "react"],
  mohammad: ["angular", "controller"],
  hamed: ["python", "Back End", "Database"],
};

let newTask = taskList[Employee];
newTask.push(taskName);
console.log(taskList);
