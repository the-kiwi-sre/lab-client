# Clone the public repo of Datapool Manager
git clone https://github.com/the-kiwi-sre/lab-client.git

# Copy our Dockerfile into our cloned repo
cp Dockerfile lab-client/.

# Navigate into the repo folder
cd lab-client

# Install the required dependencies / modules
npm install

# Build the Docker image
docker buildx build --push --platform=linux/amd64 -t thekiwisre/lab-client .

# Head back out to the parent folder
cd ..

# Delete the folder
rm -rf lab-client
