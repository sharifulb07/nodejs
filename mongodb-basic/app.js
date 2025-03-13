const mongoose = require("mongoose");
const { Schema } = mongoose;

mongoose
  .connect(
    "mongodb+srv://sharifulb07:sharifulb072025@cluster0.k5ook.mongodb.net/"
  )
  .then(() => console.log("database connected successfully "))
  .catch((e) => console.log(e));

const userSchema = new Schema({
  name: String,
  email: String,
  age: Number,
  isActive: Boolean,
  tags: [String],
  createdAt: { type: Date, default: Date.now },
});

//   create a user model

const User = mongoose.model("User", userSchema);

// query example async function

async function RunQueryExamples() {
  try {
   
    const newUser=await User.create({
        name: 'Deleted user',
        email: "deleteduser@gmail.com",
        age: '50',
        isActive: false,
        tags: ['deleteduser', ],

    })

    // console.log('new user created successfully', newUser)

    //     const newUser = new User({
    //   name: "Adiyat Islam",
    //   email: "Adiyatdev07@gmail.com",
    //   age: "6",
    //   isActive: true,
    //   tags: ["Developer", "Designer", "Manager"],
    // });
    // await newUser.save();

    // const allUsers = await User.find({});
    // console.log(allUsers);
    // console.log("Created new User successfully here ", newUser);

    // const limitedUsers=await User.find().limit(4).skip(1);
    // console.log('limited users', limitedUsers)

// const sortedUserByage=await User.find().sort({age:-1})
// console.log("SortedUserByAge: ", sortedUserByage)

// const countDocs=await User.countDocuments({isActive:true})
// console.log("countDocuments here: ", countDocs)

// const deletedUser=await User.findByIdAndDelete(newUser._id)
// console.log("Deleted usher: ", deletedUser)

// update a user data 
const updatedUser=await User.findByIdAndUpdate(newUser._id, {
    $set:{age:41}, $push:{tags:'updated user'}
},{new:true})

console.log("Updated User: ", updatedUser)


  } catch (error) {
    console.log("Error", error);
  } finally {
    await mongoose.connection.close();
  }
}

RunQueryExamples();
