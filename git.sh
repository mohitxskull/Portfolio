#!/bin/bash

# Function to initialize a new Git repository and add a remote
function setupRepo() {
    # Clear the terminal screen
    clear

    # Initialize a new Git repository
    echo "Initializing new Git repository..."
    rm -rf .git
    git init

    # Add all files in the current directory to the repository
    git add .

    # Set the user's email and name
    echo ""
    echo "Enter your email address: "
    read -r useremail

    # Verify the email address using a regular expression
    emailRegex="^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$"
    if [[ $useremail =~ $emailRegex ]]; then
        git config user.email "$useremail"
    else
        echo "Invalid email address"
        return 1
    fi

    echo ""
    echo "Enter your name: "
    read -r username
    git config user.name "$username"

    # Make an initial commit
    echo ""
    git commit -m "first commit"

    # Create a main branch and set it as the default branch
    git branch -M main

    # Add a remote repository
    echo "Enter the remote address: "
    read -r remoteaddr
    git remote add origin "$remoteaddr"

    # Push the initial commit to the remote
    echo "Pushing initial commit to remote..."
    git push -u origin main
}

# Function to push changes to the remote
# Arguments:
#   - $1: option for pulling changes before pushing (U = update, F = update and force push)
function pushChanges() {
    if [[ "$1" == "U" ]]; then
        clear

        # Pull the latest changes from the remote
        echo "Pulling latest changes from remote..."
        git pull --ff origin main
    fi

    # Add all changed files
    git add .

    clear

    # Prompt the user for a commit message
    echo ""
    echo "Enter your commit message: "
    echo ""
    read -r commitmsg

    # Create the commit
    git commit -m "$commitmsg"

    clear
    echo ""

    # Push the changes to the remote
    if [[ "$2" == "F" ]]; then
        # Force push to resolve any non-fast-forward conflicts
        echo "Pushing changes to remote (resolving non-fast-forward conflicts)..."
        git push -u -f origin main
    else
        echo "Pushing changes to remote..."
        git push -u origin main
    fi
}

echo ""
echo "-------------------------------"
echo "This is an script which will"
echo "help you with github cmds."
echo "-------------------------------"
echo ""

# Check if a Git repository has been set up
if [ -a ".git" ]; then

    echo "Git repository already exists."
    echo "What would you like to do?"
    echo ""
    echo "-------------------------------"
    echo "N: Initialize a new repository"
    echo "P: Push changes to the remote"
    echo "U: Update and push changes to the remote"
    echo "F: Update, force push, and resolve conflicts"
    echo "-------------------------------"
    echo ""
    read -r selectedOption

    case "$selectedOption" in
    N) setupRepo ;;
    P) pushChanges ;;
    U) pushChanges "U" ;;
    F) pushChanges "U" "F" ;;
    *) echo "Invalid option. Please try again." ;;
    esac

else
    setupRepo
fi
