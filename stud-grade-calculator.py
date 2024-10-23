

print("❤️   Student Grade Calculator 📅\n\n")
while True:
   totalGrade=0
   
   name=input("Please Enter Your name: ")
   courses_number=int(input("how many courses do you take:"))
   x=0
   while x<courses_number:
        grade=float(input("please Enter Each Grade(100%): "))
        totalGrade+=grade
        x+=1
   average=totalGrade/courses_number
   if average <50:
        print(f"{name}, your score is:{average},you fail exams please read more.🙏🏻   ")
   else:
        print(f"{name},your score is:{average}, passed!🙏🏻    ")
   inputValue=input("Do you want to add other student(y/n)?")
   if inputValue!='y'and inputValue!='Y':
       break

