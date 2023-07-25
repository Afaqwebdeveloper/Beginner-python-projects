from tkinter import*
root = Tk()
root.geometry("500x300")

def getvals():
    print("Accepted")

#Heading Name 
Label(root,text="Python Registration Form", font="arial 15 bold").grid(row=0, column=3)

#Feild name
name = Label(root, text="Name")
Phone = Label(root, text="Phone")
Gender = Label(root, text="Gender")
Emergency = Label(root, text="Emergency")
PaymentMode = Label(root,text="Payment Mode")

# Packing fields
name.grid(row=1, column=2)
Phone.grid(row=2, column=2)
Gender.grid(row=3, column=2)
Emergency.grid(row=4, column=2)
PaymentMode.grid(row=5, column=2)


# Variable for string data
namevalue = StringVar
phonevalue = StringVar
gendervalue = StringVar
emergencyvalue = StringVar
PaymentModevalue = StringVar
checkvalue = IntVar

# Creating entry field

nameentry = Entry(root, textvariable=namevalue)
phoneentry = Entry(root, textvariable=phonevalue)
genderentry = Entry(root, textvariable=gendervalue)
emergencyentry = Entry(root,textvariable=emergencyvalue)
paymentmodeentry =Entry(root, textvariable=PaymentModevalue)

# Packing entry fields

nameentry.grid(row=1, column=3)
phoneentry.grid(row=2, column=3)
genderentry.grid(row=3, column=3)
emergencyentry.grid(row=4, column=3)
paymentmodeentry.grid(row=5, column=3)

# Creating Checkbox
checkbtn = Checkbutton(text="Remember me?" , variable = checkvalue)
checkbtn.grid(row=6,column=3)

# Submit button
Button(text="Submit", command=getvals).grid(row=7 , column=3)

root.mainloop()



