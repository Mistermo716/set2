function jediName(firstName, lastName)
{
    const prefix = lastName.substring(0,3);
    const suffix = firstName.substring(0,2);

    return console.log(prefix + suffix);
}

jediName("Zhou", "Yen");