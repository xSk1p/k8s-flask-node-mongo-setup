# Deploy ECK operator on your cluster
kubectl create -f https://download.elastic.co/downloads/eck/2.14.0/crds.yaml

kubectl apply -f https://download.elastic.co/downloads/eck/2.14.0/operator.yaml