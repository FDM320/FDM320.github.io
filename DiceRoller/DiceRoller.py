from random import randint

# Loop infinitely until the user types quit.
while True:
    print("# Type \"quit\" to exit the program.")
    typeOfDie = input("How many sides are on the die you'd like to roll? ")
    # Check if the input is quit, and if it is break out of the loop and exit the program.
    if typeOfDie == "quit":
        break
    else:
        # Check if the input was a valid int. If it wasn't, restart the while loop.
        try:
            typeOfDie = int(typeOfDie)
        except ValueError:
            print("That isn't a valid number. Please try again.\n")
            continue
    # I added this while loop so that if the user inputs an invalid value,
    # they won't have to re-input the type of die they'd like to roll.
    while True:
        numberOfRolls = input("How many dice would you like to roll? ")
        # If the user types back, send them back to the first input prompt.
        if numberOfRolls == "back":
            break
        else:
            # Check if the input was a valid int. If it wasn't, restart the while loop.
            try:
                numberOfRolls = int(numberOfRolls)
            except ValueError:
                print("That isn't a valid number. Please try again, or type \"back\" to enter in a new die.\n")
                continue
        # Roll dice with the specified number of sides the specified number of times.
        for i in range(numberOfRolls):
            print(randint(1, typeOfDie), end= " ")
        print("")
        break

