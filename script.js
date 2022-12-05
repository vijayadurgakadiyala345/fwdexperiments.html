var peoples = ["Greg","Mary","Devon","James"];
    let count=peoples.slice(1,2);
    console.log(count);
    let d=peoples.splice(2,1,"elizabeth","artie");
    console.log(d);
    console.log(peoples[0]);
    delete peoples[0];
    document.writeln("<br>"+peoples);
    delete peoples[3];
    document.writeln("<br>"+peoples)
    peoples[0]="Matt";
    document.writeln("<br>"+peoples);
    peoples[3]="vijaya durga";
    document.writeln("<br>"+peoples);
    let r = peoples.indexOf("Devon");
     console.log(r);
     document.write(r);
     let c = peoples.indexOf("foo");
     document.write(c);