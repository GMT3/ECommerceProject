# ECommerceProject
An open source project for an Ecommerce website inspired by Lama Dev

## Credit
Lama Dev <a href="https://github.com/safak">Gitthub Profile</a> <a href="https://www.youtube.com/watch?v=y66RgYMAgSo">Youtube Tutorial</a>


## Instructions
<ul>
    <li>
        <h6>Make sure you have the following accounts</h6>
        <ul>
            <li><a href="https://mongodb.com">MongoDB</a></li>
            <li><a href="https://stripe.com">Stripe</a></li>
        </ul>
    </li>
    <li>
        <h6>Create <strong>.env</strong> files in <a href="./website">website folder</a> and <a href="./server">server folder</h6>
    </li>
    <li>
        <h6>Go to <a href="https://dashboard.stripe.com/">Stripe Dashboard</a> and click on the <a href="https://dashboard.stripe.com/test/developers">Developers</a> Button</h6>
    </li>
    <li>
        <h6>Click on the <a href="https://dashboard.stripe.com/test/apikeys">API keys</a> tab</h6>
    </li>
    <li>
        <h6>Copy the <strong>Publishable key</strong> and insert in the <strong>.env</strong> file in the <a href="./website">website folder</a></h6>
    </li>
</ul>

```
REACT_APP_STRIPE=pk_test_yourstripepublishablekey
```

<ul>
    <li>
        <h6>Copy the <strong>Secret key</strong> and add it to the <strong>.env</strong> file in the <a href="./server">server folder</a></h6>
        <hr/>
        <h5 style="color:red;">NOTE make sure you do not publish this <strong>Secret key</strong> anyway</h5>
    </li>
</ul>

```
STRIPE_KEY=sk_test_yourstripepublishablekey
```

