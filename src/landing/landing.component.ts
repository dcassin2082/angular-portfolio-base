import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor( private router: Router,
    private sanitizer: DomSanitizer, private toastr: ToastrService) { }

    reveal() {
      var reveals = document.querySelectorAll(".reveal");
      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    }

    ngOnInit(): void {
      this.router.navigate(['/home']);
      this.isDetails1 = true;
      this.isDetails2 = true;
      this.isDetails3 = true;
      this.isDetails4 = true;
      this.isDetails5 = true;
      this.isDetails6 = true;
      this.isDetails7 = true;
      this.isDetails8 = true;
      this.isDetails9 = true;
      this.isDetails10 = true;

      this.senderSafe = this.sanitizer.bypassSecurityTrustHtml(
        this.processHtml(this.sender)
      );
      this.taskSafe = this.sanitizer.bypassSecurityTrustHtml(
        this.processHtml(this.task)
      );
      this.receiverSafe = this.sanitizer.bypassSecurityTrustHtml(
        this.processHtml(this.receiver)
      );
      this.connStringsSafe = this.sanitizer.bypassSecurityTrustHtml(
        this.processHtml(this.connStrings)
      );
      this.userSafe = this.sanitizer.bypassSecurityTrustHtml(
        this.processHtml(this.user)
      );
      this.item4Safe = this.sanitizer.bypassSecurityTrustHtml(
        this.processHtml(this.item4)
      );
      this.item9Safe = this.sanitizer.bypassSecurityTrustHtml(
        this.processHtml(this.item9)
      );
      this.identityModelsSafe = this.sanitizer.bypassSecurityTrustHtml(
        this.processHtml(this.identityModels)
      );
      this.authenticationContextSafe = this.sanitizer.bypassSecurityTrustHtml(
        this.processHtml(this.authenticationContext)
      );
      this.configurationSafe = this.sanitizer.bypassSecurityTrustHtml(
        this.processHtml(this.configuration)
      );
      this.startupSafe = this.sanitizer.bypassSecurityTrustHtml(
        this.processHtml(this.startup)
      );
      this.authHelperSafe = this.sanitizer.bypassSecurityTrustHtml(
        this.processHtml(this.authHelper)
      );
      this.controllerSafe = this.sanitizer.bypassSecurityTrustHtml(
        this.processHtml(this.controller)
      );
      this.iRepositorySafe = this.sanitizer.bypassSecurityTrustHtml(
        this.processHtml(this.iRepository)
      );
      this.repositoryBaseSafe = this.sanitizer.bypassSecurityTrustHtml(
        this.processHtml(this.repositoryBase)
      );
      this.repositorySafe = this.sanitizer.bypassSecurityTrustHtml(
        this.processHtml(this.repository)
      );
      this.iCustomerServiceSafe = this.sanitizer.bypassSecurityTrustHtml(
        this.processHtml(this.iCustomerService)
      );
      this.servicesBaseSafe = this.sanitizer.bypassSecurityTrustHtml(
        this.processHtml(this.servicesBase)
      );
      this.customerServiceApiSafe = this.sanitizer.bypassSecurityTrustHtml(
        this.processHtml(this.customerServiceApi)
      );
      this.apiControllerSafe = this.sanitizer.bypassSecurityTrustHtml(
        this.processHtml(this.apiController)
      );
      this.registerServicesSafe = this.sanitizer.bypassSecurityTrustHtml(
        this.processHtml(this.registerServices)
      );
      this.authGuardTsSafe = this.sanitizer.bypassSecurityTrustHtml(
        this.processHtml(this.authGuardTs)
      );
      this.authInterceptorTsSafe = this.sanitizer.bypassSecurityTrustHtml(
        this.processHtml(this.authInterceptorTs)
      );
      this.userHtmlSafe = this.sanitizer.bypassSecurityTrustHtml(
        this.processHtml(this.userHtml)
      );
      this.loginHtmlSafe = this.sanitizer.bypassSecurityTrustHtml(
        this.processHtml(this.loginHtml)
      );
      this.loginTsSafe = this.sanitizer.bypassSecurityTrustHtml(
        this.processHtml(this.loginTs)
      );
      this.registerHtmlSafe = this.sanitizer.bypassSecurityTrustHtml(
        this.processHtml(this.registerHtml)
      );
      this.registerTsSafe = this.sanitizer.bypassSecurityTrustHtml(
        this.processHtml(this.registerTs)
      );
      this.userServiceTsSafe = this.sanitizer.bypassSecurityTrustHtml(
        this.processHtml(this.userServiceTs)
      );
      this.appModule1Safe = this.sanitizer.bypassSecurityTrustHtml(
        this.processHtml(this.appModule1)
      );
      this.appModule2Safe = this.sanitizer.bypassSecurityTrustHtml(
        this.processHtml(this.appModule2)
      );
      this.appModule3Safe = this.sanitizer.bypassSecurityTrustHtml(
        this.processHtml(this.appModule3)
      );
      this.appRoutesTsSafe = this.sanitizer.bypassSecurityTrustHtml(
        this.processHtml(this.appRoutesTs)
      );
      window.addEventListener("scroll", this.reveal, true);
      this.reveal();
    }

    goToProducts() {
      this.router.navigate(['https://www.google.com/maps']);
    }

    navigate(route: string) {
      this.router.navigate([route]);
    }

    showDetails(num: number) {
      switch (num) {
        case 1:
          this.isDetails1 = !this.isDetails1;
          break;
        case 2:
          this.isDetails2 = !this.isDetails2;
          break;
        case 3:
          this.isDetails3 = !this.isDetails3;
          break;
        case 4:
          this.isDetails4 = !this.isDetails4;
          break;
        case 5:
          this.isDetails5 = !this.isDetails5;
          break;
        case 6:
          this.isDetails6 = !this.isDetails6;
          break;
        case 7:
          this.isDetails7 = !this.isDetails7;
          break;
        case 8:
          this.isDetails8 = !this.isDetails8;
          break;
        case 9:
          this.isDetails9 = !this.isDetails9;
          break;
        case 10:
          this.isDetails10 = !this.isDetails10;
          break;
      }
      this.isReadMore = !this.isReadMore;
    }

    // home page articles
    showDetails1() {
      this.isReadMore = !this.isReadMore;
    }

    showDiv: boolean = false;
    linkText: string = this.showDiv ? 'READ LESS' : 'READ MORE';

    copyText(val: string) {
      try {
        let selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        let t = document.getElementById
        let text = document.getElementById(val).innerText;
        selBox.value = text;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
        this.toastr.success('Copied Successfully', 'Copy Text');
      } catch {
        this.toastr.error('Unable to copy', 'Copy Text');
      }
    }

    toggle(p: string, b: string) {
      let elem = document.getElementById(p);
      let btn = document.getElementById(b);
      if (elem.style.display === 'none') {
        elem.style.display = 'block';
        this.linkText = 'READ LESS';
      } else {
        elem.style.display = 'none';
        // btn.innerHTML = "READ MORE";
        this.linkText = 'READ MORE';
      }
    }
    processHtml(html: string) {
      return [html.slice(0, 12), 'padding:20px;', html.slice(12)]
        .join('')
        .replace('{', '&#123;')
        .replace('}', ' &#125;');
    }

    jsonOptions = `
        services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2)
            .AddJsonOptions(options =>
             {
                 var resolver = options.SerializerSettings.ContractResolver;
                 if (resolver != null)
                    (resolver as DefaultContractResolver).NamingStrategy = null;
                  });
    `;
    task = `<span style="color:gainsboro;">Task</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Delay</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">TimeSpan</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">FromSeconds</span><span style="color:gainsboro;">(</span><span style="color:#b5cea8;">3</span><span style="color:gainsboro;">))</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Wait</span><span style="color:gainsboro;">();</span>`;
    taskSafe: SafeHtml;

    receiver = `<pre style="font-family:Consolas;font-size:13px;color:#dadada;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;using</span>&nbsp;<span style="color:gainsboro;">Models</span><span style="color:gainsboro;">;</span>
    <span style="color:#569cd6;">using</span>&nbsp;<span style="color:gainsboro;">Newtonsoft</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Json</span><span style="color:gainsboro;">;</span>
    <span style="color:#569cd6;">using</span>&nbsp;<span style="color:gainsboro;">RabbitMQ</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Client</span><span style="color:gainsboro;">;</span>
    <span style="color:#569cd6;">using</span>&nbsp;<span style="color:gainsboro;">RabbitMQ</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Client</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Events</span><span style="color:gainsboro;">;</span>
    <span style="color:#569cd6;">using</span>&nbsp;<span style="color:gainsboro;">System</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Text</span><span style="color:gainsboro;">;</span>

    <span style="color:gainsboro;">ConnectionFactory</span>&nbsp;<span style="color:#9cdcfe;">factory</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">new</span><span style="color:gainsboro;">();</span>
    <span style="color:gainsboro;">factory</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Uri</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">new</span>&nbsp;<span style="color:gainsboro;">Uri</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">uriString</span><span style="color:gainsboro;">:</span>&nbsp;<span style="color:#d69d85;">&quot;amqp://guest:guest@localhost:5672&quot;</span><span style="color:gainsboro;">);</span>
    <span style="color:gainsboro;">factory</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">ClientProvidedName</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#d69d85;">&quot;Rabbit&nbsp;Receiver&nbsp;App&quot;</span><span style="color:gainsboro;">;</span>

    <span style="color:gainsboro;">IConnection</span>&nbsp;<span style="color:#9cdcfe;">cnn</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">factory</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">CreateConnection</span><span style="color:gainsboro;">();</span>
    <span style="color:gainsboro;">IModel</span>&nbsp;<span style="color:#9cdcfe;">channel</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">cnn</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">CreateModel</span><span style="color:gainsboro;">();</span>
    <span style="color:#569cd6;">string</span>&nbsp;<span style="color:#9cdcfe;">exchangeName</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#d69d85;">&quot;DemoExchange&quot;</span><span style="color:gainsboro;">;</span>
    <span style="color:#569cd6;">string</span>&nbsp;<span style="color:#9cdcfe;">routingKey</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#d69d85;">&quot;demo-routing-key&quot;</span><span style="color:gainsboro;">;</span>
    <span style="color:#569cd6;">string</span>&nbsp;<span style="color:#9cdcfe;">queueName</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#d69d85;">&quot;DemoQueue&quot;</span><span style="color:gainsboro;">;</span>

    <span style="color:gainsboro;">channel</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">ExchangeDeclare</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">exchangeName</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:gainsboro;">ExchangeType</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Direct</span><span style="color:gainsboro;">);</span>
    <span style="color:gainsboro;">channel</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">QueueDeclare</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">queueName</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:gainsboro;">durable</span><span style="color:gainsboro;">:</span>&nbsp;<span style="color:#569cd6;">false</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:gainsboro;">exclusive</span><span style="color:gainsboro;">:</span>&nbsp;<span style="color:#569cd6;">false</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:gainsboro;">autoDelete</span><span style="color:gainsboro;">:</span>&nbsp;<span style="color:#569cd6;">false</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:gainsboro;">arguments</span><span style="color:gainsboro;">:</span>&nbsp;<span style="color:#569cd6;">null</span><span style="color:gainsboro;">);</span>
    <span style="color:gainsboro;">channel</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">QueueBind</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">queueName</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:gainsboro;">exchangeName</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:gainsboro;">routingKey</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:gainsboro;">arguments</span><span style="color:gainsboro;">:</span>&nbsp;<span style="color:#569cd6;">null</span><span style="color:gainsboro;">);</span>
    <span style="color:gainsboro;">channel</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">BasicQos</span><span style="color:gainsboro;">(</span><span style="color:#b5cea8;">0</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:#b5cea8;">1</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:#569cd6;">false</span><span style="color:gainsboro;">);</span>

    <span style="color:#569cd6;">var</span>&nbsp;<span style="color:#9cdcfe;">consumer</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">new</span>&nbsp;<span style="color:gainsboro;">EventingBasicConsumer</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">channel</span><span style="color:gainsboro;">);</span>
    <span style="color:gainsboro;">consumer</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Received</span>&nbsp;<span style="color:#b4b4b4;">+=</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:#9cdcfe;">sender</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:#9cdcfe;">args</span><span style="color:gainsboro;">)</span>&nbsp;<span style="color:#b4b4b4;">=&gt;</span>
    <span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">Task</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Delay</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">TimeSpan</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">FromSeconds</span><span style="color:gainsboro;">(</span><span style="color:#b5cea8;">3</span><span style="color:gainsboro;">))</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Wait</span><span style="color:gainsboro;">();</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">var</span>&nbsp;<span style="color:#9cdcfe;">body</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">args</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Body</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">ToArray</span><span style="color:gainsboro;">();</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">User</span>&nbsp;<span style="color:#9cdcfe;">user</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">JsonConvert</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">DeserializeObject</span><span style="color:gainsboro;">&lt;</span><span style="color:gainsboro;">User</span><span style="color:gainsboro;">&gt;(</span><span style="color:gainsboro;">Encoding</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">UTF8</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">GetString</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">body</span><span style="color:gainsboro;">));</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">Console</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">WriteLine</span><span style="color:gainsboro;">(</span><span style="color:#d69d85;">$&quot;Employee&nbsp;ID:&nbsp;</span><span style="color:gainsboro;">{</span><span style="color:gainsboro;">user</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">UserId</span><span style="color:gainsboro;">}</span><span style="color:#d69d85;">,&nbsp;First&nbsp;name:&nbsp;</span><span style="color:gainsboro;">{</span><span style="color:gainsboro;">user</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">FirstName</span><span style="color:gainsboro;">}</span><span style="color:#d69d85;">,&nbsp;Last&nbsp;name:&nbsp;</span><span style="color:gainsboro;">{</span><span style="color:gainsboro;">user</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">LastName</span><span style="color:gainsboro;">}</span><span style="color:#d69d85;">&quot;</span><span style="color:gainsboro;">);</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">channel</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">BasicAck</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">args</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">DeliveryTag</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:#569cd6;">false</span><span style="color:gainsboro;">);</span>
    <span style="color:gainsboro;">};</span>

    <span style="color:#569cd6;">string</span>&nbsp;<span style="color:#9cdcfe;">consumerTag</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">channel</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">BasicConsume</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">queueName</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:#569cd6;">false</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:gainsboro;">consumer</span><span style="color:gainsboro;">);</span>

    <span style="color:#57a64a;">//&nbsp;keep&nbsp;console&nbsp;running&nbsp;so&nbsp;the&nbsp;app&nbsp;can&nbsp;continue&nbsp;listening</span>
    <span style="color:gainsboro;">Console</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">ReadLine</span><span style="color:gainsboro;">();</span>

    <span style="color:gainsboro;">channel</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">BasicCancel</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">consumerTag</span><span style="color:gainsboro;">);</span>

    <span style="color:gainsboro;">channel</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Close</span><span style="color:gainsboro;">();</span>
    <span style="color:gainsboro;">cnn</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Close</span><span style="color:gainsboro;">();</span></pre>`;
    receiverSafe: SafeHtml;

    sender = `<pre style="font-family:Consolas;font-size:13px;color:#dadada;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;using</span>&nbsp;<span style="color:gainsboro;">Models</span><span style="color:gainsboro;">;</span>
    <span style="color:#569cd6;">using</span>&nbsp;<span style="color:gainsboro;">Newtonsoft</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Json</span><span style="color:gainsboro;">;</span>
    <span style="color:#569cd6;">using</span>&nbsp;<span style="color:gainsboro;">RabbitMQ</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Client</span><span style="color:gainsboro;">;</span>
    <span style="color:#569cd6;">using</span>&nbsp;<span style="color:gainsboro;">System</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Text</span><span style="color:gainsboro;">;</span>

    <span style="color:gainsboro;">ConnectionFactory</span>&nbsp;<span style="color:#9cdcfe;">factory</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">new</span><span style="color:gainsboro;">();</span>

    <span style="color:#57a64a;">//&nbsp;For&nbsp;demonstration&nbsp;only,&nbsp;connection&nbsp;strings&nbsp;should&nbsp;be&nbsp;moved&nbsp;to&nbsp;external&nbsp;configuration&nbsp;file&nbsp;such&nbsp;as&nbsp;appsettings.json</span>
    <span style="color:gainsboro;">factory</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Uri</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">new</span>&nbsp;<span style="color:gainsboro;">Uri</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">uriString</span><span style="color:gainsboro;">:</span>&nbsp;<span style="color:#d69d85;">&quot;amqp://guest:guest@localhost:5672&quot;</span><span style="color:gainsboro;">);</span>

    <span style="color:gainsboro;">factory</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">ClientProvidedName</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#d69d85;">&quot;Rabbit&nbsp;Sender&nbsp;App&quot;</span><span style="color:gainsboro;">;</span>

    <span style="color:gainsboro;">IConnection</span>&nbsp;<span style="color:#9cdcfe;">cnn</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">factory</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">CreateConnection</span><span style="color:gainsboro;">();</span>
    <span style="color:gainsboro;">IModel</span>&nbsp;<span style="color:#9cdcfe;">channel</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">cnn</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">CreateModel</span><span style="color:gainsboro;">();</span>
    <span style="color:#569cd6;">string</span>&nbsp;<span style="color:#9cdcfe;">exchangeName</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#d69d85;">&quot;DemoExchange&quot;</span><span style="color:gainsboro;">;</span>
    <span style="color:#569cd6;">string</span>&nbsp;<span style="color:#9cdcfe;">routingKey</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#d69d85;">&quot;demo-routing-key&quot;</span><span style="color:gainsboro;">;</span>
    <span style="color:#569cd6;">string</span>&nbsp;<span style="color:#9cdcfe;">queueName</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#d69d85;">&quot;DemoQueue&quot;</span><span style="color:gainsboro;">;</span>

    <span style="color:gainsboro;">channel</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">ExchangeDeclare</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">exchangeName</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:gainsboro;">ExchangeType</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Direct</span><span style="color:gainsboro;">);</span>
    <span style="color:gainsboro;">channel</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">QueueDeclare</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">queueName</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:gainsboro;">durable</span><span style="color:gainsboro;">:</span>&nbsp;<span style="color:#569cd6;">false</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:gainsboro;">exclusive</span><span style="color:gainsboro;">:</span>&nbsp;<span style="color:#569cd6;">false</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:gainsboro;">autoDelete</span><span style="color:gainsboro;">:</span>&nbsp;<span style="color:#569cd6;">false</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:gainsboro;">arguments</span><span style="color:gainsboro;">:</span>&nbsp;<span style="color:#569cd6;">null</span><span style="color:gainsboro;">);</span>
    <span style="color:gainsboro;">channel</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">QueueBind</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">queueName</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:gainsboro;">exchangeName</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:gainsboro;">routingKey</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:gainsboro;">arguments</span><span style="color:gainsboro;">:</span>&nbsp;<span style="color:#569cd6;">null</span><span style="color:gainsboro;">);</span>

    <span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">counter</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span><span style="color:gainsboro;">;</span>
    <span style="color:#d8a0df;">foreach</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:gainsboro;">var</span>&nbsp;<span style="color:#9cdcfe;">user</span>&nbsp;<span style="color:#d8a0df;">in</span>&nbsp;<span style="color:gainsboro;">User</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">users</span><span style="color:gainsboro;">)</span>
    <span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">Console</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">WriteLine</span><span style="color:gainsboro;">(</span><span style="color:#d69d85;">$&quot;sending&nbsp;message&nbsp;</span><span style="color:gainsboro;">{</span><span style="color:gainsboro;">counter</span><span style="color:#b4b4b4;">++</span><span style="color:gainsboro;">}</span><span style="color:#d69d85;">&quot;</span><span style="color:gainsboro;">);</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">byte</span><span style="color:gainsboro;">[]</span>&nbsp;<span style="color:#9cdcfe;">messageBodyBytes</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">Encoding</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">UTF8</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">GetBytes</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">s</span><span style="color:gainsboro;">:</span>&nbsp;<span style="color:#d69d85;">$&quot;</span><span style="color:gainsboro;">{</span><span style="color:gainsboro;">JsonConvert</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">SerializeObject</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">user</span><span style="color:gainsboro;">)}</span><span style="color:#d69d85;">&quot;</span><span style="color:gainsboro;">);</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">channel</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">BasicPublish</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">exchangeName</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:gainsboro;">routingKey</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:gainsboro;">basicProperties</span><span style="color:gainsboro;">:</span>&nbsp;<span style="color:#569cd6;">null</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:gainsboro;">messageBodyBytes</span><span style="color:gainsboro;">);</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">Thread</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Sleep</span><span style="color:gainsboro;">(</span><span style="color:#b5cea8;">1000</span><span style="color:gainsboro;">);</span>
    <span style="color:gainsboro;">}</span>

    <span style="color:gainsboro;">channel</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Close</span><span style="color:gainsboro;">();</span>
    <span style="color:gainsboro;">cnn</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Close</span><span style="color:gainsboro;">();</span></pre>`;
    senderSafe: SafeHtml;

    user = `<pre style="font-family:Consolas;font-size:13px;color:#dadada;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;public</span>&nbsp;<span style="color:#569cd6;">class</span>&nbsp;<span style="color:#4ec9b0;">User</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">public</span>&nbsp;<span style="color:#569cd6;">int</span>&nbsp;<span style="color:gainsboro;">UserId</span>&nbsp;<span style="color:gainsboro;">{</span>&nbsp;<span style="color:#569cd6;">get</span><span style="color:gainsboro;">;</span>&nbsp;<span style="color:#569cd6;">set</span><span style="color:gainsboro;">;</span>&nbsp;<span style="color:gainsboro;">}</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">public</span>&nbsp;<span style="color:#569cd6;">string</span><span style="color:#b4b4b4;">?</span>&nbsp;<span style="color:gainsboro;">FirstName</span>&nbsp;<span style="color:gainsboro;">{</span>&nbsp;<span style="color:#569cd6;">get</span><span style="color:gainsboro;">;</span>&nbsp;<span style="color:#569cd6;">set</span><span style="color:gainsboro;">;</span>&nbsp;<span style="color:gainsboro;">}</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">public</span>&nbsp;<span style="color:#569cd6;">string</span><span style="color:#b4b4b4;">?</span>&nbsp;<span style="color:gainsboro;">LastName</span>&nbsp;<span style="color:gainsboro;">{</span>&nbsp;<span style="color:#569cd6;">get</span><span style="color:gainsboro;">;</span>&nbsp;<span style="color:#569cd6;">set</span><span style="color:gainsboro;">;</span>&nbsp;<span style="color:gainsboro;">}</span>

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">public</span>&nbsp;<span style="color:#569cd6;">static</span>&nbsp;<span style="color:gainsboro;">List</span><span style="color:gainsboro;">&lt;</span><span style="color:gainsboro;">User</span><span style="color:gainsboro;">&gt;</span>&nbsp;<span style="color:gainsboro;">users</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">new</span>&nbsp;<span style="color:gainsboro;">List</span><span style="color:gainsboro;">&lt;</span><span style="color:gainsboro;">User</span><span style="color:gainsboro;">&gt;()</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">new</span>&nbsp;<span style="color:gainsboro;">User</span><span style="color:gainsboro;">()</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">UserId</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">1</span><span style="color:gainsboro;">,</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">FirstName</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#d69d85;">&quot;John&quot;</span><span style="color:gainsboro;">,</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">LastName</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#d69d85;">&quot;Doe&quot;</span><span style="color:gainsboro;">,</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">},</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">new</span>&nbsp;<span style="color:gainsboro;">User</span><span style="color:gainsboro;">()</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">UserId</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">2</span><span style="color:gainsboro;">,</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">FirstName</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#d69d85;">&quot;Ivy&quot;</span><span style="color:gainsboro;">,</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">LastName</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#d69d85;">&quot;Smith&quot;</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">},</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">new</span>&nbsp;<span style="color:gainsboro;">User</span><span style="color:gainsboro;">()</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">UserId</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">3</span><span style="color:gainsboro;">,</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">FirstName</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#d69d85;">&quot;Morgan&quot;</span><span style="color:gainsboro;">,</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">LastName</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#d69d85;">&quot;Teely&quot;</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">};</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span></pre>`;
    userSafe: SafeHtml;

    nuget = `
    Microsoft.EntityFrameworkCore.SqlServer
    Microsoft.EntityFrameworkCore.Tools
    Bricelam.EntityFrameworkCore.Pluralizer
    Microsoft.AspNetCore.Mvc.NewtonsoftJson
    Microsoft.Extensions.Configuration
    Microsoft.Extensions.Configuration.FileExtensions
    Microsoft.Extensions.Configuration.Json
    `;

    connStringsSafe: SafeHtml;
    connStrings: string = `<pre style="font-family:Consolas;font-size:13px;color:gainsboro;background:#1e1e1e;">&nbsp;&nbsp;<span style="color:#d7ba7d;">&quot;ConnectionStrings&quot;</span><span style="color:#b4b4b4;">:</span>&nbsp;<span style="color:#b4b4b4;">{</span>
      &nbsp;&nbsp;<span style="color:#d7ba7d;">&quot;JungleDbConnection&quot;</span><span style="color:#b4b4b4;">:</span>&nbsp;<span style="color:#d69d85;">&quot;server=localhost;initial&nbsp;catalog=dbname;integrated&nbsp;security=true;&nbsp;MultipleActiveResultSets=true;&quot;</span><span style="color:#b4b4b4;">,</span>
      &nbsp;&nbsp;<span style="color:#d7ba7d;">&quot;MsAspConnection&quot;</span><span style="color:#b4b4b4;">:</span>&nbsp;<span style="color:#d69d85;">&quot;Data&nbsp;Source=servername;Initial&nbsp;Catalog=dbname;User&nbsp;Id=user_id;password=password&quot;</span>
    <span style="color:#b4b4b4;">}</span>

    <span style="color:#d7ba7d;">&quot;ApplicationSettings&quot;</span><span style="color:#b4b4b4;">:</span>&nbsp;<span style="color:#b4b4b4;">{</span>
      &nbsp;&nbsp;<span style="color:#d7ba7d;">&quot;Jwt_Secret&quot;</span><span style="color:#b4b4b4;">:</span>&nbsp;<span style="color:#d69d85;">&quot;your_secret_min_16_bytes&quot;</span><span style="color:#b4b4b4;">,</span>
      &nbsp;&nbsp;<span style="color:#d7ba7d;">&quot;ClientURL&quot;</span><span style="color:#b4b4b4;">:</span>&nbsp;<span style="color:#d69d85;">&quot;http://localhost:4200&quot;</span>
      <span style="color:#b4b4b4;">}</span>
      </pre>
    `;

    dbContext = `
    PM> scaffold-dbcontext "server=(local)\sqlexpress;database=db_name;trusted_connection=true;multipleactiveresultsets=true;"
    microsoft.entityframeworkcore.sqlserver -outputdir Models -Context DbContextName
    `;
    item4Safe: SafeHtml;
    item4: string = `<pre style="font-family:Consolas;font-size:13px;color:#dadada;background:#1e1e1e;"><span style="color:gainsboro;">&nbsp;builder</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Services</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">AddControllers</span><span style="color:gainsboro;">()</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">AddNewtonsoftJson</span><span style="color:gainsboro;">(</span><span style="color:#9cdcfe;">options</span>&nbsp;<span style="color:#b4b4b4;">=&gt;</span>
    <span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">var</span>&nbsp;<span style="color:#9cdcfe;">resolver</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">options</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">SerializerSettings</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">ContractResolver</span><span style="color:gainsboro;">;</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:gainsboro;">resolver</span>&nbsp;<span style="color:#b4b4b4;">!=</span>&nbsp;<span style="color:#569cd6;">null</span><span style="color:gainsboro;">)</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">(</span><span style="color:gainsboro;">resolver</span>&nbsp;<span style="color:#569cd6;">as</span>&nbsp;<span style="color:gainsboro;">DefaultContractResolver</span><span style="color:gainsboro;">)</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">NamingStrategy</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">null</span><span style="color:gainsboro;">;</span>
    <span style="color:gainsboro;">});</span>
    <span style="color:#d8a0df;">if</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:gainsboro;">Environment</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">IsProduction</span><span style="color:gainsboro;">())</span>
    <span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">builder</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Services</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">AddDbContext</span><span style="color:gainsboro;">&lt;</span><span style="color:gainsboro;">JungleDbContext</span><span style="color:gainsboro;">&gt;(</span><span style="color:#9cdcfe;">options</span>&nbsp;<span style="color:#b4b4b4;">=&gt;</span>&nbsp;<span style="color:gainsboro;">options</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">UseSqlServer</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">Configuration</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">GetConnectionString</span><span style="color:gainsboro;">(</span><span style="color:#d69d85;">&quot;MsAspConnection&quot;</span><span style="color:gainsboro;">)));</span>
    <span style="color:gainsboro;">}</span>
    <span style="color:#d8a0df;">else</span>
    <span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">builder</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Services</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">AddDbContext</span><span style="color:gainsboro;">&lt;</span><span style="color:gainsboro;">JungleDbContext</span><span style="color:gainsboro;">&gt;(</span><span style="color:#9cdcfe;">options</span>&nbsp;<span style="color:#b4b4b4;">=&gt;</span>&nbsp;<span style="color:gainsboro;">options</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">UseSqlServer</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">Configuration</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">GetConnectionString</span><span style="color:gainsboro;">(</span><span style="color:#d69d85;">&quot;JungleDbConnection&quot;</span><span style="color:gainsboro;">)));</span>
    <span style="color:gainsboro;">}</span>
    <span style="color:gainsboro;">builder</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Services</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">AddCors</span><span style="color:gainsboro;">();</span>
    <span style="color:#569cd6;">var</span>&nbsp;<span style="color:#9cdcfe;">app</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">builder</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Build</span><span style="color:gainsboro;">();</span>
    <span style="color:gainsboro;">app</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">UseCors</span><span style="color:gainsboro;">(</span><span style="color:#9cdcfe;">builder</span>&nbsp;<span style="color:#b4b4b4;">=&gt;</span>&nbsp;<span style="color:gainsboro;">builder</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">AllowAnyMethod</span><span style="color:gainsboro;">()</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">AllowAnyHeader</span><span style="color:gainsboro;">()</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">AllowAnyOrigin</span><span style="color:gainsboro;">());</span></pre>
    `;
    item5 = `
    services.AddCors();
    `;
    item6 = `
    // Add this at the top of the Configure method
    app.UseCors(builder => builder.WithOrigins(Configuration["ApplicationSettings:ClientURL"]
      .ToString().AllowAnyMethod().AllowAnyHeader());
  `;
    item7 = `
    "ApplicationSettings": {
      "Jwt_Secret": "your_secret_min_16_bytes",
      "ClientURL": "http://localhost:4200"
    }
  `;

    item8 = `
  services.AddControllers().AddNewtonsoftJson(options =>
  {
      var resolver = options.SerializerSettings.ContractResolver;
      if (resolver != null)
          (resolver as DefaultContractResolver).NamingStrategy = null;
  });
  `;
    item9Safe: SafeHtml;
    item9: string = `<pre style="font-family:Consolas;font-size:13px;color:gainsboro;background:#1e1e1e;">&nbsp;&nbsp;<span style="color:#569cd6;">protected</span>&nbsp;<span style="color:#569cd6;">override</span>&nbsp;<span style="color:#569cd6;">void</span>&nbsp;<span style="color:#dcdcaa;">OnConfiguring</span>(DbContextOptionsBuilder&nbsp;<span style="color:#9cdcfe;">optionsBuilder</span>)
    {
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;(<span style="color:#b4b4b4;">!</span>optionsBuilder<span style="color:#b4b4b4;">.</span>IsConfigured)
    &nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">var</span>&nbsp;<span style="color:#9cdcfe;">builder</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">new</span>&nbsp;ConfigurationBuilder();
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;builder<span style="color:#b4b4b4;">.</span>AddJsonFile(<span style="color:#d69d85;">&quot;appsettings.json&quot;</span>,&nbsp;optional:&nbsp;<span style="color:#569cd6;">false</span>);
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">var</span>&nbsp;<span style="color:#9cdcfe;">config</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;builder<span style="color:#b4b4b4;">.</span>Build();
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">var</span>&nbsp;<span style="color:#9cdcfe;">cs</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;config<span style="color:#b4b4b4;">.</span>GetConnectionString(<span style="color:#d69d85;">&quot;JungleDbConnection&quot;</span>);
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;optionsBuilder<span style="color:#b4b4b4;">.</span>UseSqlServer(cs);
    &nbsp;&nbsp;&nbsp;&nbsp;}
    }</pre>
  `;

    html = `
    <div class="card-header div-center">
    <span class="api-title">
        <h4>
            <i class="fa fa-suitcase "></i> Sales Tracker
        </h4>
    </span>
  </div>
    `;
    typescript = `
    sort(key: string) {
      this.key = key;
      this.reverse = !this.reverse;
    }
    `;
    snippet = `
    using System;
    using System.Collections.Generic;
    using System.Data;
    using System.Data.SqlClient;
    using System.Linq;
    using System.Threading.Tasks;
    using JungleApi.Services.Models;
    using JungleApi.Web.Models;
    using Microsoft.AspNetCore.Http;
    using Microsoft.AspNetCore.Mvc;

    namespace JungleApi.Web.Controllers
    {
        [Route("api/[controller]")]
        [ApiController]
        public class EmployeeDetailController : ControllerBase
        {
            private JungleDbContext db = new JungleDbContext();

            public IEnumerable<Services.Models.EmployeeDetail> GetEmployees()
            {
                string[] departments = { "Sales South", "Sales North", "Sales East", "Sales West" };

                return db.EmployeeDetails.Where(d => departments.Any(e => e == d.Department)).OrderBy(f => f.FirstName).ToList();
            }

            [Route("saleshistory")]
            [HttpGet]
            public IEnumerable<SalesHistory> GetSalesHistories()
            {
                return db.SalesHistories;
            }

            public static T GetFieldValue<T>(DataRow dr, string fieldname)
            {
                if (dr[fieldname] == null || dr[fieldname] == DBNull.Value)
                    return default;
                else
                    return (T)Convert.ChangeType(dr[fieldname], typeof(T));
            }
        }
    }
   `;
    sql = `
   CREATE TYPE [dbo].[NameTableType] AS TABLE(
    [Id] [int] NOT NULL,
    [FirstName] [nvarchar](50) NULL,
    [LastName] [nvarchar](50) NULL
  )
  GO
   `;

    addAuth = `
  AuthorizationHelper.AddAuthentication(services, key);
  `;
    authHelperSafe: SafeHtml;
    authHelper: string = `<pre style="font-family:Consolas;font-size:13px;color:gainsboro;background:#1e1e1e;">&nbsp;&nbsp;<span style="color:#569cd6;">public</span>&nbsp;<span style="color:#569cd6;">sealed</span>&nbsp;<span style="color:#569cd6;">class</span>&nbsp;<span style="color:#4ec9b0;">AuthorizationHelper</span>
    {
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">public</span>&nbsp;<span style="color:#569cd6;">static</span>&nbsp;<span style="color:#569cd6;">string</span>&nbsp;<span style="color:#dcdcaa;">CreateUserAuthorizationToken</span>(<span style="color:#569cd6;">string</span>&nbsp;<span style="color:#9cdcfe;">type</span>,&nbsp;<span style="color:#569cd6;">string</span>&nbsp;<span style="color:#9cdcfe;">id</span>,&nbsp;IList&lt;<span style="color:#569cd6;">string</span>&gt;&nbsp;<span style="color:#9cdcfe;">role</span>,&nbsp;IdentityOptions&nbsp;<span style="color:#9cdcfe;">options</span>,&nbsp;<span style="color:#569cd6;">string</span>&nbsp;<span style="color:#9cdcfe;">secret</span>)
    &nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">var</span>&nbsp;<span style="color:#9cdcfe;">tokenDescriptor</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">new</span>&nbsp;SecurityTokenDescriptor
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Subject&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">new</span>&nbsp;ClaimsIdentity(<span style="color:#569cd6;">new</span>&nbsp;Claim[]
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">new</span>&nbsp;Claim(type,&nbsp;id),
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">new</span>&nbsp;Claim(options<span style="color:#b4b4b4;">.</span>ClaimsIdentity<span style="color:#b4b4b4;">.</span>RoleClaimType,&nbsp;role<span style="color:#b4b4b4;">.</span>FirstOrDefault())
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}),
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Expires&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;DateTime<span style="color:#b4b4b4;">.</span>UtcNow<span style="color:#b4b4b4;">.</span>AddDays(<span style="color:#b5cea8;">1</span>),
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SigningCredentials&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">new</span>&nbsp;SigningCredentials(<span style="color:#569cd6;">new</span>&nbsp;SymmetricSecurityKey(Encoding<span style="color:#b4b4b4;">.</span>UTF8<span style="color:#b4b4b4;">.</span>GetBytes(secret)),
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SecurityAlgorithms<span style="color:#b4b4b4;">.</span>HmacSha256Signature)
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;};
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">var</span>&nbsp;<span style="color:#9cdcfe;">tokenHandler</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">new</span>&nbsp;JwtSecurityTokenHandler();
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">var</span>&nbsp;<span style="color:#9cdcfe;">securityToken</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;tokenHandler<span style="color:#b4b4b4;">.</span>CreateToken(tokenDescriptor);
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">var</span>&nbsp;<span style="color:#9cdcfe;">token</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;tokenHandler<span style="color:#b4b4b4;">.</span>WriteToken(securityToken);
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;token;
    &nbsp;&nbsp;&nbsp;&nbsp;}

    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">public</span>&nbsp;<span style="color:#569cd6;">static</span>&nbsp;<span style="color:#569cd6;">void</span>&nbsp;<span style="color:#dcdcaa;">AddAuthentication</span>(IServiceCollection&nbsp;<span style="color:#9cdcfe;">services</span>,&nbsp;<span style="color:#569cd6;">byte</span>[]&nbsp;<span style="color:#9cdcfe;">key</span>)
    &nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;services<span style="color:#b4b4b4;">.</span>AddAuthentication(<span style="color:#9cdcfe;">x</span>&nbsp;<span style="color:#b4b4b4;">=&gt;</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x<span style="color:#b4b4b4;">.</span>DefaultAuthenticateScheme&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;JwtBearerDefaults<span style="color:#b4b4b4;">.</span>AuthenticationScheme;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x<span style="color:#b4b4b4;">.</span>DefaultChallengeScheme&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;JwtBearerDefaults<span style="color:#b4b4b4;">.</span>AuthenticationScheme;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x<span style="color:#b4b4b4;">.</span>DefaultScheme&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;JwtBearerDefaults<span style="color:#b4b4b4;">.</span>AuthenticationScheme;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;})
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#b4b4b4;">.</span>AddJwtBearer(<span style="color:#9cdcfe;">x</span>&nbsp;<span style="color:#b4b4b4;">=&gt;</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x<span style="color:#b4b4b4;">.</span>RequireHttpsMetadata&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">false</span>;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x<span style="color:#b4b4b4;">.</span>SaveToken&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">false</span>;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x<span style="color:#b4b4b4;">.</span>TokenValidationParameters&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">new</span>&nbsp;TokenValidationParameters
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ValidateIssuerSigningKey&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">true</span>,
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;IssuerSigningKey&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">new</span>&nbsp;SymmetricSecurityKey(key),
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ValidateIssuer&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">false</span>,
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ValidateAudience&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">false</span>,
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ClockSkew&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;TimeSpan<span style="color:#b4b4b4;">.</span>Zero
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;};
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;});
    &nbsp;&nbsp;&nbsp;&nbsp;}
    }</pre>
  `;

    token = `
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
  eyJVc2VySUQiOiIyMTRmMDQ3Yi1hOTkyLTRlNjctOTMxNS1kODllMDYyMWIxYzEiLCJyb2xlIjoiYWRtaW4iLCJuYmYiOjE1OTM5ODI5NzUsImV4cCI6MTU5NDA2OTM3NSwiaWF0IjoxNTkzOTgyOTc1fQ.
  Fg4cWQOtnGqfiLaKgrG7keQxFtL4LlQnUxa0ma-H4LU"
  `;
    jsonBody = `
  {
    "username":"danc",
    "password":"12345"
  }
  `;
    controllerSafe: SafeHtml;
    controller: string = `<pre style="font-family:Consolas;font-size:13px;color:gainsboro;background:#1e1e1e;">&nbsp;&nbsp;[Route(<span style="color:#d69d85;">&quot;api/[controller]&quot;</span>)]
    [ApiController]
    <span style="color:#569cd6;">public</span>&nbsp;<span style="color:#569cd6;">class</span>&nbsp;<span style="color:#4ec9b0;">ApplicationUserController</span>&nbsp;:&nbsp;ControllerBase
    {
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">private</span>&nbsp;UserManager&lt;ApplicationUser&gt;&nbsp;_userManager;
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">private</span>&nbsp;SignInManager&lt;ApplicationUser&gt;&nbsp;_signInManager;
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">private</span>&nbsp;<span style="color:#569cd6;">readonly</span>&nbsp;ApplicationSettings&nbsp;_appSettings;

    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">public</span>&nbsp;<span style="color:#4ec9b0;">ApplicationUserController</span>(UserManager&lt;ApplicationUser&gt;&nbsp;<span style="color:#9cdcfe;">userManager</span>,&nbsp;SignInManager&lt;ApplicationUser&gt;&nbsp;<span style="color:#9cdcfe;">signInManager</span>,&nbsp;IOptions&lt;ApplicationSettings&gt;&nbsp;<span style="color:#9cdcfe;">appSettings</span>)
    &nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_userManager&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;userManager;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_signInManager&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;signInManager;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_appSettings&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;appSettings<span style="color:#b4b4b4;">.</span>Value;
    &nbsp;&nbsp;&nbsp;&nbsp;}

    &nbsp;&nbsp;&nbsp;&nbsp;[HttpPost]
    &nbsp;&nbsp;&nbsp;&nbsp;[Route(<span style="color:#d69d85;">&quot;Register&quot;</span>)]
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;Post:&nbsp;/api/ApplicationUser/Register</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">public</span>&nbsp;<span style="color:#569cd6;">async</span>&nbsp;Task&lt;<span style="color:#569cd6;">object</span>&gt;&nbsp;<span style="color:#dcdcaa;">PostApplicationUser</span>(ApplicationUserModel&nbsp;<span style="color:#9cdcfe;">model</span>)
    &nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;model<span style="color:#b4b4b4;">.</span>Role&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#d69d85;">&quot;Admin&quot;</span>;

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">var</span>&nbsp;<span style="color:#9cdcfe;">applicationUser</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">new</span>&nbsp;ApplicationUser()
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;UserName&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;model<span style="color:#b4b4b4;">.</span>UserName,
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;model<span style="color:#b4b4b4;">.</span>Email,
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FullName&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;model<span style="color:#b4b4b4;">.</span>FullName
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;};
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">try</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">var</span>&nbsp;<span style="color:#9cdcfe;">result</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">await</span>&nbsp;_userManager<span style="color:#b4b4b4;">.</span>CreateAsync(applicationUser,&nbsp;model<span style="color:#b4b4b4;">.</span>Password);
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">await</span>&nbsp;_userManager<span style="color:#b4b4b4;">.</span>AddToRoleAsync(applicationUser,&nbsp;model<span style="color:#b4b4b4;">.</span>Role);
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;Ok(result);
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">catch</span>&nbsp;(Exception&nbsp;<span style="color:#9cdcfe;">ex</span>)
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">throw</span>&nbsp;<span style="color:#569cd6;">new</span>&nbsp;Exception(ex<span style="color:#b4b4b4;">.</span>Message);
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;}

    &nbsp;&nbsp;&nbsp;&nbsp;[HttpPost]
    &nbsp;&nbsp;&nbsp;&nbsp;[Route(<span style="color:#d69d85;">&quot;Login&quot;</span>)]
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;Post:&nbsp;/api/ApplicationUser/Login</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">public</span>&nbsp;<span style="color:#569cd6;">async</span>&nbsp;Task&lt;IActionResult&gt;&nbsp;<span style="color:#dcdcaa;">Login</span>(LoginModel&nbsp;<span style="color:#9cdcfe;">model</span>)
    &nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">var</span>&nbsp;<span style="color:#9cdcfe;">user</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">await</span>&nbsp;_userManager<span style="color:#b4b4b4;">.</span>FindByNameAsync(model<span style="color:#b4b4b4;">.</span>UserName);
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;(user&nbsp;<span style="color:#b4b4b4;">!=</span>&nbsp;<span style="color:#569cd6;">null</span>&nbsp;<span style="color:#b4b4b4;">&amp;&amp;</span>&nbsp;<span style="color:#569cd6;">await</span>&nbsp;_userManager<span style="color:#b4b4b4;">.</span>CheckPasswordAsync(user,&nbsp;model<span style="color:#b4b4b4;">.</span>Password))
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;get&nbsp;roles&nbsp;assigned&nbsp;to&nbsp;user</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">var</span>&nbsp;<span style="color:#9cdcfe;">role</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">await</span>&nbsp;_userManager<span style="color:#b4b4b4;">.</span>GetRolesAsync(user);
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;IdentityOptions&nbsp;<span style="color:#9cdcfe;">options</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">new</span>&nbsp;IdentityOptions();
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">string</span>&nbsp;<span style="color:#9cdcfe;">token</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;AuthorizationHelper<span style="color:#b4b4b4;">.</span>CreateUserAuthorizationToken(<span style="color:#d69d85;">&quot;UserID&quot;</span>,&nbsp;user<span style="color:#b4b4b4;">.</span>Id,&nbsp;role,&nbsp;options,&nbsp;_appSettings<span style="color:#b4b4b4;">.</span>ClientSecret);
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;Ok(<span style="color:#569cd6;">new</span>&nbsp;{&nbsp;token&nbsp;});
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">else</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;BadRequest(<span style="color:#569cd6;">new</span>&nbsp;{&nbsp;message&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#d69d85;">&quot;Username&nbsp;or&nbsp;password&nbsp;is&nbsp;incorrect&quot;</span>&nbsp;});
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;}
    }</pre>
  `;

    startupSafe: SafeHtml;
    startup: string = `<pre style="font-family:Consolas;font-size:13px;color:gainsboro;background:#1e1e1e;"><span style="color:#57a64a;">//&nbsp;Inside&nbsp;Startup.cs,&nbsp;ConfigureServices&nbsp;method,&nbsp;add&nbsp;the&nbsp;following&nbsp;code</span>
    <span style="color:#569cd6;">var</span>&nbsp;<span style="color:#9cdcfe;">connSection</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;Configuration<span style="color:#b4b4b4;">.</span>GetSection(<span style="color:#d69d85;">&quot;ConnectionStrings&quot;</span>);
    services<span style="color:#b4b4b4;">.</span>Configure&lt;ConnectionSettings&gt;(connSection);
    <span style="color:#569cd6;">var</span>&nbsp;<span style="color:#9cdcfe;">connSettings</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;connSection<span style="color:#b4b4b4;">.</span>Get&lt;ConnectionSettings&gt;();

    <span style="color:#569cd6;">var</span>&nbsp;<span style="color:#9cdcfe;">appSection</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;Configuration<span style="color:#b4b4b4;">.</span>GetSection(<span style="color:#d69d85;">&quot;ApplicationSettings&quot;</span>);
    services<span style="color:#b4b4b4;">.</span>Configure&lt;ApplicationSettings&gt;(appSection);
    <span style="color:#569cd6;">var</span>&nbsp;<span style="color:#9cdcfe;">appSettings</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;appSection<span style="color:#b4b4b4;">.</span>Get&lt;ApplicationSettings&gt;();
    <span style="color:#569cd6;">var</span>&nbsp;<span style="color:#9cdcfe;">key</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;Encoding<span style="color:#b4b4b4;">.</span>UTF8<span style="color:#b4b4b4;">.</span>GetBytes(appSettings<span style="color:#b4b4b4;">.</span>ClientSecret);

    <span style="color:#57a64a;">//&nbsp;Add&nbsp;default&nbsp;identity&nbsp;</span>
    services<span style="color:#b4b4b4;">.</span>AddIdentity&lt;ApplicationUser,&nbsp;IdentityRole&gt;()<span style="color:#b4b4b4;">.</span>
    &nbsp;&nbsp;&nbsp;&nbsp;AddEntityFrameworkStores&lt;AuthenticationContext&gt;()<span style="color:#b4b4b4;">.</span>
    &nbsp;&nbsp;&nbsp;&nbsp;AddDefaultTokenProviders();

    <span style="color:#57a64a;">//&nbsp;configure&nbsp;identity&nbsp;options&nbsp;to&nbsp;override&nbsp;default&nbsp;options&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
    services<span style="color:#b4b4b4;">.</span>Configure&lt;IdentityOptions&gt;(<span style="color:#9cdcfe;">options</span>&nbsp;<span style="color:#b4b4b4;">=&gt;</span>
    {
    &nbsp;&nbsp;&nbsp;&nbsp;options<span style="color:#b4b4b4;">.</span>Password<span style="color:#b4b4b4;">.</span>RequireDigit&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">false</span>;
    &nbsp;&nbsp;&nbsp;&nbsp;options<span style="color:#b4b4b4;">.</span>Password<span style="color:#b4b4b4;">.</span>RequireNonAlphanumeric&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">false</span>;
    &nbsp;&nbsp;&nbsp;&nbsp;options<span style="color:#b4b4b4;">.</span>Password<span style="color:#b4b4b4;">.</span>RequireLowercase&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">false</span>;
    &nbsp;&nbsp;&nbsp;&nbsp;options<span style="color:#b4b4b4;">.</span>Password<span style="color:#b4b4b4;">.</span>RequireUppercase&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">false</span>;
    &nbsp;&nbsp;&nbsp;&nbsp;options<span style="color:#b4b4b4;">.</span>Password<span style="color:#b4b4b4;">.</span>RequiredLength&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">4</span>;
    });

    services<span style="color:#b4b4b4;">.</span>AddDbContext&lt;AuthenticationContext&gt;(<span style="color:#9cdcfe;">options</span>&nbsp;<span style="color:#b4b4b4;">=&gt;</span>&nbsp;options<span style="color:#b4b4b4;">.</span>UseSqlServer(connSettings<span style="color:#b4b4b4;">.</span>IdentityConnection));
    AuthorizationHelper<span style="color:#b4b4b4;">.</span>AddAuthentication(services,&nbsp;key);</pre>
  `;
    configurationSafe: SafeHtml;
    configuration: string = `<pre style="font-family:Consolas;font-size:13px;color:gainsboro;background:#1e1e1e;">&nbsp;&nbsp;<span style="color:#569cd6;">public</span>&nbsp;<span style="color:#569cd6;">class</span>&nbsp;<span style="color:#4ec9b0;">ApplicationSettings</span>
    {
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">public</span>&nbsp;<span style="color:#569cd6;">string</span>&nbsp;ClientSecret&nbsp;{&nbsp;<span style="color:#569cd6;">get</span>;&nbsp;<span style="color:#569cd6;">set</span>;&nbsp;}
    }

    <span style="color:#569cd6;">public</span>&nbsp;<span style="color:#569cd6;">class</span>&nbsp;<span style="color:#4ec9b0;">ConnectionSettings</span>
    {
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">public</span>&nbsp;<span style="color:#569cd6;">string</span>&nbsp;IdentityConnection&nbsp;{&nbsp;<span style="color:#569cd6;">get</span>;&nbsp;<span style="color:#569cd6;">set</span>;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">public</span>&nbsp;<span style="color:#569cd6;">string</span>&nbsp;JungleDbConnection&nbsp;{&nbsp;<span style="color:#569cd6;">get</span>;&nbsp;<span style="color:#569cd6;">set</span>;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">public</span>&nbsp;<span style="color:#569cd6;">string</span>&nbsp;AzureDbConnection&nbsp;{&nbsp;<span style="color:#569cd6;">get</span>;&nbsp;<span style="color:#569cd6;">set</span>;&nbsp;}
    }</pre>
  `;

    app = `
    app.UseAuthentication();
  `;
    authenticationContextSafe: SafeHtml;
    authenticationContext: string = `<pre style="font-family:Consolas;font-size:13px;color:gainsboro;background:#1e1e1e;">&nbsp;&nbsp;<span style="color:#569cd6;">public</span>&nbsp;<span style="color:#569cd6;">class</span>&nbsp;<span style="color:#4ec9b0;">AuthenticationContext</span>&nbsp;:&nbsp;IdentityDbContext
    {
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">public</span>&nbsp;<span style="color:#4ec9b0;">AuthenticationContext</span>(DbContextOptions&lt;AuthenticationContext&gt;&nbsp;<span style="color:#9cdcfe;">options</span>)&nbsp;:&nbsp;<span style="color:#569cd6;">base</span>(options)
    &nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">public</span>&nbsp;DbSet&lt;ApplicationUser&gt;&nbsp;ApplicationUsers&nbsp;{&nbsp;<span style="color:#569cd6;">get</span>;&nbsp;<span style="color:#569cd6;">set</span>;&nbsp;}

    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">protected</span>&nbsp;<span style="color:#569cd6;">override</span>&nbsp;<span style="color:#569cd6;">void</span>&nbsp;<span style="color:#dcdcaa;">OnModelCreating</span>(ModelBuilder&nbsp;<span style="color:#9cdcfe;">builder</span>)
    &nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">base</span><span style="color:#b4b4b4;">.</span>OnModelCreating(builder);

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;builder<span style="color:#b4b4b4;">.</span>Entity&lt;IdentityUser&gt;(<span style="color:#9cdcfe;">entity</span>&nbsp;<span style="color:#b4b4b4;">=&gt;</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;entity<span style="color:#b4b4b4;">.</span>ToTable(name:&nbsp;<span style="color:#d69d85;">&quot;User&quot;</span>);
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;});
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;builder<span style="color:#b4b4b4;">.</span>Entity&lt;IdentityRole&gt;(<span style="color:#9cdcfe;">entity</span>&nbsp;<span style="color:#b4b4b4;">=&gt;</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;entity<span style="color:#b4b4b4;">.</span>ToTable(name:&nbsp;<span style="color:#d69d85;">&quot;Role&quot;</span>);
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;});
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;builder<span style="color:#b4b4b4;">.</span>Entity&lt;IdentityUserRole&lt;<span style="color:#569cd6;">string</span>&gt;&gt;(<span style="color:#9cdcfe;">entity</span>&nbsp;<span style="color:#b4b4b4;">=&gt;</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;entity<span style="color:#b4b4b4;">.</span>ToTable(<span style="color:#d69d85;">&quot;UserRoles&quot;</span>);
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;});

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;builder<span style="color:#b4b4b4;">.</span>Entity&lt;IdentityUserClaim&lt;<span style="color:#569cd6;">string</span>&gt;&gt;(<span style="color:#9cdcfe;">entity</span>&nbsp;<span style="color:#b4b4b4;">=&gt;</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;entity<span style="color:#b4b4b4;">.</span>ToTable(<span style="color:#d69d85;">&quot;UserClaims&quot;</span>);
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;});

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;builder<span style="color:#b4b4b4;">.</span>Entity&lt;IdentityUserLogin&lt;<span style="color:#569cd6;">string</span>&gt;&gt;(<span style="color:#9cdcfe;">entity</span>&nbsp;<span style="color:#b4b4b4;">=&gt;</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;entity<span style="color:#b4b4b4;">.</span>ToTable(<span style="color:#d69d85;">&quot;UserLogins&quot;</span>);
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;});

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;builder<span style="color:#b4b4b4;">.</span>Entity&lt;IdentityRoleClaim&lt;<span style="color:#569cd6;">string</span>&gt;&gt;(<span style="color:#9cdcfe;">entity</span>&nbsp;<span style="color:#b4b4b4;">=&gt;</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;entity<span style="color:#b4b4b4;">.</span>ToTable(<span style="color:#d69d85;">&quot;RoleClaims&quot;</span>);
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;});

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;builder<span style="color:#b4b4b4;">.</span>Entity&lt;IdentityUserToken&lt;<span style="color:#569cd6;">string</span>&gt;&gt;(<span style="color:#9cdcfe;">entity</span>&nbsp;<span style="color:#b4b4b4;">=&gt;</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;entity<span style="color:#b4b4b4;">.</span>ToTable(<span style="color:#d69d85;">&quot;UserTokens&quot;</span>);
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;});

    &nbsp;&nbsp;&nbsp;&nbsp;}
    }</pre>
  `;

    asdfh = `
  1  using System;
  2  using System.Collections.Generic;
  3  using System.Linq;
  4  using System.Threading.Tasks;
  5  using Microsoft.AspNetCore.Http;
  6  using Microsoft.AspNetCore.Mvc;
  7  using Microsoft.EntityFrameworkCore;
  8  using DemoApi.Models;
  9  using DemoApi.Services;
  10
  11 namespace DemoApi.Controllers
  12 {
  13    [Route("api/[controller]")]
  14    [ApiController]
  15    public class ProductsController : ControllerBase
  16    {
  17        private readonly IProductService _productService;
  18
  19        public ProductsController(IProductService productService)
  20        {
  21            _productService = productService;
  22        }
  23
  24        // GET: api/Products
  25        [HttpGet("products")]
  26        public async Task<ActionResult<IEnumerable<Product>>> GetProducts()
  27        {
  28            return await _productService.GetProducts();
  29        }
  30
  31        [HttpGet("products/{id}/{sort}")]
  32        public async Task<ActionResult<IEnumerable<Product>>> GetProducts(int id, string sort)
  33        {
  34            return await _productService.GetProducts(id, sort);
  35        }
  36    }
  37  }
  `;

    identityModelsSafe: SafeHtml;
    identityModels: string = `<pre style="font-family:Consolas;font-size:13px;color:gainsboro;background:#1e1e1e;"><span style="color:#57a64a;">//&nbsp;In&nbsp;Models&nbsp;folder&nbsp;</span>
    <span style="color:#569cd6;">public</span>&nbsp;<span style="color:#569cd6;">class</span>&nbsp;<span style="color:#4ec9b0;">ApplicationUser</span>&nbsp;:&nbsp;IdentityUser
    {
    &nbsp;&nbsp;&nbsp;&nbsp;[Column(TypeName&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#d69d85;">&quot;nvarchar(150)&quot;</span>)]
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">public</span>&nbsp;<span style="color:#569cd6;">string</span>&nbsp;FullName&nbsp;{&nbsp;<span style="color:#569cd6;">get</span>;&nbsp;<span style="color:#569cd6;">set</span>;&nbsp;}
    }

    <span style="color:#569cd6;">public</span>&nbsp;<span style="color:#569cd6;">class</span>&nbsp;<span style="color:#4ec9b0;">ApplicationUserModel</span>
    {
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">public</span>&nbsp;<span style="color:#569cd6;">string</span>&nbsp;UserName&nbsp;{&nbsp;<span style="color:#569cd6;">get</span>;&nbsp;<span style="color:#569cd6;">set</span>;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">public</span>&nbsp;<span style="color:#569cd6;">string</span>&nbsp;Email&nbsp;{&nbsp;<span style="color:#569cd6;">get</span>;&nbsp;<span style="color:#569cd6;">set</span>;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">public</span>&nbsp;<span style="color:#569cd6;">string</span>&nbsp;Password&nbsp;{&nbsp;<span style="color:#569cd6;">get</span>;&nbsp;<span style="color:#569cd6;">set</span>;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">public</span>&nbsp;<span style="color:#569cd6;">string</span>&nbsp;FullName&nbsp;{&nbsp;<span style="color:#569cd6;">get</span>;&nbsp;<span style="color:#569cd6;">set</span>;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">public</span>&nbsp;<span style="color:#569cd6;">string</span>&nbsp;Role&nbsp;{&nbsp;<span style="color:#569cd6;">get</span>;&nbsp;<span style="color:#569cd6;">set</span>;&nbsp;}
    }

    <span style="color:#569cd6;">public</span>&nbsp;<span style="color:#569cd6;">class</span>&nbsp;<span style="color:#4ec9b0;">LoginModel</span>
    {
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">public</span>&nbsp;<span style="color:#569cd6;">string</span>&nbsp;UserName&nbsp;{&nbsp;<span style="color:#569cd6;">get</span>;&nbsp;<span style="color:#569cd6;">set</span>;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">public</span>&nbsp;<span style="color:#569cd6;">string</span>&nbsp;Password&nbsp;{&nbsp;<span style="color:#569cd6;">get</span>;&nbsp;<span style="color:#569cd6;">set</span>;&nbsp;}
    }
    </pre>
  `;
    connString = `
  "IdentityConnection": "data source=(local)\\sqlexpress;initial catalog=JwtIdentity;integrated security=true;MultipleActiveResultSets=true;"
  `;

    appSettings = `
  "ApplicationSettings": {
  "ClientSecret": "0123456789abcdef"
  }
  `;
    preHtml: string = `<pre style="padding-top:10px;padding-bottom:10px;font-family:Consolas;font-size:13px;color:gainsboro;background:#1e1e1e;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">static</span>&nbsp;<span style="color:#569cd6;">int</span>&nbsp;<span style="color:#dcdcaa;">MinLength</span>(<span style="color:#569cd6;">int</span>[]&nbsp;<span style="color:#9cdcfe;">arr</span>,&nbsp;<span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">n</span>)
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//int[]&nbsp;arr&nbsp;=&nbsp;{&nbsp;3,&nbsp;1,&nbsp;2,&nbsp;4,&nbsp;5,&nbsp;6,&nbsp;0,&nbsp;1&nbsp;};</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">left</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span>,&nbsp;<span style="color:#9cdcfe;">sum</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span>,&nbsp;<span style="color:#9cdcfe;">min</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">int</span><span style="color:#b4b4b4;">.</span>MaxValue;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">for</span>&nbsp;(<span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">i</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span>;&nbsp;i&nbsp;<span style="color:#b4b4b4;">&lt;</span>&nbsp;arr<span style="color:#b4b4b4;">.</span>Length;&nbsp;i<span style="color:#b4b4b4;">++</span>)
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sum&nbsp;<span style="color:#b4b4b4;">+=</span>&nbsp;arr[i];
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">while</span>&nbsp;(sum&nbsp;<span style="color:#b4b4b4;">&gt;=</span>&nbsp;n)
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;(sum&nbsp;<span style="color:#b4b4b4;">==</span>&nbsp;<span style="color:#b5cea8;">7</span>)
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">break</span>;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;min&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;Math<span style="color:#b4b4b4;">.</span>Min(min,&nbsp;i&nbsp;<span style="color:#b4b4b4;">+</span>&nbsp;<span style="color:#b5cea8;">1</span>&nbsp;<span style="color:#b4b4b4;">-</span>&nbsp;left);
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sum&nbsp;<span style="color:#b4b4b4;">-=</span>&nbsp;arr[left];
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;left<span style="color:#b4b4b4;">++</span>;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;min<span style="color:#b4b4b4;">.</span>Equals(<span style="color:#569cd6;">int</span><span style="color:#b4b4b4;">.</span>MinValue)&nbsp;<span style="color:#b4b4b4;">?</span>&nbsp;<span style="color:#b5cea8;">0</span>&nbsp;<span style="color:#b4b4b4;">:</span>&nbsp;min;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</pre>`;
    div1: string = '../../assets/img/pexels-photo-1578248.jpeg';
    div2: string = '../../assets/img/pexels-photo-2680270.jpeg';
    div3: string = '../../assets/img/pexels-photo-924824.jpeg';
    divtools: string = '../../assets/img/pexels-photo-3062948.jpeg';
    isReadMore: boolean;
    isDetails1: boolean;
    isDetails2: boolean;
    isDetails3: boolean;
    isDetails4: boolean;
    isDetails5: boolean;
    isDetails6: boolean;
    isDetails7: boolean;
    isDetails8: boolean;
    isDetails9: boolean;
    isDetails10: boolean;

    indexHtml = `<!DOCTYPE html>
    <html>
      <head> </head>
      <body>
        <h1>Hello Docker</h1>
        <p>this is our docker website</p>
        <p>
          <a href="about.html">About site</a>
        </p>
      </body>
    </html>
    `;
    indexHtmlSafe: SafeHtml;

    authInterceptorTsSafe: SafeHtml;
    authInterceptorTs: string = `<pre style="font-family:Consolas;font-size:13px;color:#dadada;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;import</span>&nbsp;<span style="color:gainsboro;">{</span>&nbsp;<span style="color:gainsboro;">HttpInterceptor</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:gainsboro;">HttpRequest</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:gainsboro;">HttpHandler</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:gainsboro;">HttpEvent</span>&nbsp;<span style="color:gainsboro;">}</span>&nbsp;<span style="color:#569cd6;">from</span>&nbsp;<span style="color:#d69d85;">&#39;@angular/common/http&#39;</span><span style="color:gainsboro;">;</span>
    <span style="color:#569cd6;">import</span>&nbsp;<span style="color:gainsboro;">{</span>&nbsp;<span style="color:gainsboro;">Inject</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:gainsboro;">Injectable</span>&nbsp;<span style="color:gainsboro;">}</span>&nbsp;<span style="color:#569cd6;">from</span>&nbsp;<span style="color:#d69d85;">&#39;@angular/core&#39;</span><span style="color:gainsboro;">;</span>
    <span style="color:#569cd6;">import</span>&nbsp;<span style="color:gainsboro;">{</span>&nbsp;<span style="color:gainsboro;">Observable</span>&nbsp;<span style="color:gainsboro;">}</span>&nbsp;<span style="color:#569cd6;">from</span>&nbsp;<span style="color:#d69d85;">&#39;rxjs&#39;</span><span style="color:gainsboro;">;</span>
    <span style="color:#569cd6;">import</span>&nbsp;<span style="color:gainsboro;">{</span>&nbsp;<span style="color:gainsboro;">tap</span>&nbsp;<span style="color:gainsboro;">}</span>&nbsp;<span style="color:#569cd6;">from</span>&nbsp;<span style="color:#d69d85;">&#39;rxjs/operators&#39;</span><span style="color:gainsboro;">;</span>
    <span style="color:#569cd6;">import</span>&nbsp;<span style="color:gainsboro;">{</span>&nbsp;<span style="color:gainsboro;">Router</span>&nbsp;<span style="color:gainsboro;">}</span>&nbsp;<span style="color:#569cd6;">from</span>&nbsp;<span style="color:#d69d85;">&#39;@angular/router&#39;</span><span style="color:gainsboro;">;</span>

    <span style="color:gainsboro;">@</span><span style="color:gainsboro;">Injectable</span><span style="color:gainsboro;">()</span>
    <span style="color:#569cd6;">export</span>&nbsp;<span style="color:#569cd6;">class</span>&nbsp;<span style="color:#4ec9b0;">AuthInterceptor</span>&nbsp;<span style="color:#569cd6;">implements</span>&nbsp;<span style="color:gainsboro;">HttpInterceptor</span>&nbsp;<span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">constructor</span><span style="color:gainsboro;">(</span><span style="color:#569cd6;">private</span>&nbsp;<span style="color:#9cdcfe;">router</span><span style="color:gainsboro;">:</span>&nbsp;<span style="color:gainsboro;">Router</span><span style="color:gainsboro;">)</span>&nbsp;<span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>

    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">intercept</span><span style="color:gainsboro;">(</span><span style="color:#9cdcfe;">req</span><span style="color:gainsboro;">:</span>&nbsp;<span style="color:gainsboro;">HttpRequest</span><span style="color:gainsboro;">&lt;</span><span style="color:#569cd6;">any</span><span style="color:gainsboro;">&gt;,</span>&nbsp;<span style="color:#9cdcfe;">next</span><span style="color:gainsboro;">:</span>&nbsp;<span style="color:gainsboro;">HttpHandler</span><span style="color:gainsboro;">):</span>&nbsp;<span style="color:gainsboro;">Observable</span><span style="color:gainsboro;">&lt;</span><span style="color:gainsboro;">HttpEvent</span><span style="color:gainsboro;">&lt;</span><span style="color:#569cd6;">any</span><span style="color:gainsboro;">&gt;&gt;</span>&nbsp;<span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">if</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:gainsboro;">localStorage</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">getItem</span><span style="color:gainsboro;">(</span><span style="color:#d69d85;">&#39;token&#39;</span><span style="color:gainsboro;">)</span>&nbsp;<span style="color:#b4b4b4;">!=</span>&nbsp;<span style="color:#569cd6;">null</span><span style="color:gainsboro;">)</span>&nbsp;<span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">const</span>&nbsp;<span style="color:gainsboro;">clonedReq</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">req</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">clone</span><span style="color:gainsboro;">({</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">headers</span><span style="color:gainsboro;">:</span>&nbsp;<span style="color:gainsboro;">req</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">headers</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">set</span><span style="color:gainsboro;">(</span><span style="color:#d69d85;">&#39;Authorization&#39;</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:#d69d85;">&#39;Bearer&nbsp;&#39;</span>&nbsp;<span style="color:#b4b4b4;">+</span>&nbsp;<span style="color:gainsboro;">localStorage</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">getItem</span><span style="color:gainsboro;">(</span><span style="color:#d69d85;">&#39;token&#39;</span><span style="color:gainsboro;">))</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">});</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">return</span>&nbsp;<span style="color:gainsboro;">next</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">handle</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">clonedReq</span><span style="color:gainsboro;">).</span><span style="color:gainsboro;">pipe</span><span style="color:gainsboro;">(</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">tap</span><span style="color:gainsboro;">(</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">succ</span>&nbsp;<span style="color:gainsboro;">=&gt;</span>&nbsp;<span style="color:gainsboro;">{},</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">err</span>&nbsp;<span style="color:gainsboro;">=&gt;</span>&nbsp;<span style="color:gainsboro;">{</span>&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">if</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">err</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">status</span>&nbsp;<span style="color:#b4b4b4;">==</span>&nbsp;<span style="color:#b5cea8;">401</span><span style="color:gainsboro;">){</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">localStorage</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">removeItem</span><span style="color:gainsboro;">(</span><span style="color:#d69d85;">&#39;token&#39;</span><span style="color:gainsboro;">);</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">this</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">router</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">navigateByUrl</span><span style="color:gainsboro;">(</span><span style="color:#d69d85;">&#39;/user/login&#39;</span><span style="color:gainsboro;">);</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">)</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">)</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">else</span><span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">return</span>&nbsp;<span style="color:gainsboro;">next</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">handle</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">req</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">clone</span><span style="color:gainsboro;">());</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
    <span style="color:gainsboro;">}</span></pre>`;

    authGuardTsSafe: SafeHtml;
    authGuardTs: string = `<pre style="font-family:Consolas;font-size:13px;color:#dadada;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;import</span>&nbsp;<span style="color:gainsboro;">{</span>&nbsp;<span style="color:gainsboro;">Injectable</span>&nbsp;<span style="color:gainsboro;">}</span>&nbsp;<span style="color:#569cd6;">from</span>&nbsp;<span style="color:#d69d85;">&#39;@angular/core&#39;</span><span style="color:gainsboro;">;</span>
    <span style="color:#569cd6;">import</span>&nbsp;<span style="color:gainsboro;">{</span>&nbsp;<span style="color:gainsboro;">CanActivate</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:gainsboro;">ActivatedRouteSnapshot</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:gainsboro;">RouterStateSnapshot</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:gainsboro;">Router</span>&nbsp;<span style="color:gainsboro;">}</span>&nbsp;<span style="color:#569cd6;">from</span>&nbsp;<span style="color:#d69d85;">&#39;@angular/router&#39;</span><span style="color:gainsboro;">;</span>
    <span style="color:#569cd6;">import</span><span style="color:gainsboro;">&nbsp;</span><span style="color:gainsboro;">{</span><span style="color:gainsboro;">&nbsp;</span><span style="color:gainsboro;">Observable</span><span style="color:gainsboro;">&nbsp;</span><span style="color:gainsboro;">}</span><span style="color:gainsboro;">&nbsp;</span><span style="color:#569cd6;">from</span><span style="color:gainsboro;">&nbsp;</span><span style="color:#d69d85;">&#39;rxjs&#39;</span><span style="color:gainsboro;">;</span>
    <span style="color:#569cd6;">import</span>&nbsp;<span style="color:gainsboro;">{</span>&nbsp;<span style="color:gainsboro;">UserService</span>&nbsp;<span style="color:gainsboro;">}</span>&nbsp;<span style="color:#569cd6;">from</span>&nbsp;<span style="color:#d69d85;">&#39;../user/shared/user.service&#39;</span><span style="color:gainsboro;">;</span>

    <span style="color:gainsboro;">@</span><span style="color:gainsboro;">Injectable</span><span style="color:gainsboro;">({</span>
    &nbsp;&nbsp;<span style="color:gainsboro;">providedIn</span><span style="color:gainsboro;">:</span>&nbsp;<span style="color:#d69d85;">&#39;root&#39;</span>
    <span style="color:gainsboro;">})</span>
    <span style="color:#569cd6;">export</span>&nbsp;<span style="color:#569cd6;">class</span>&nbsp;<span style="color:#4ec9b0;">AuthGuard</span>&nbsp;<span style="color:#569cd6;">implements</span>&nbsp;<span style="color:gainsboro;">CanActivate</span>&nbsp;<span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;<span style="color:#569cd6;">constructor</span><span style="color:gainsboro;">(</span><span style="color:#569cd6;">private</span>&nbsp;<span style="color:#9cdcfe;">router</span><span style="color:gainsboro;">:</span>&nbsp;<span style="color:gainsboro;">Router</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:#569cd6;">private</span>&nbsp;<span style="color:#9cdcfe;">service</span><span style="color:gainsboro;">:</span>&nbsp;<span style="color:gainsboro;">UserService</span><span style="color:gainsboro;">)</span>&nbsp;<span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;<span style="color:gainsboro;">}</span>

    &nbsp;&nbsp;<span style="color:gainsboro;">canActivate</span><span style="color:gainsboro;">(</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">next</span><span style="color:gainsboro;">:</span>&nbsp;<span style="color:gainsboro;">ActivatedRouteSnapshot</span><span style="color:gainsboro;">,</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">state</span><span style="color:gainsboro;">:</span>&nbsp;<span style="color:gainsboro;">RouterStateSnapshot</span><span style="color:gainsboro;">):</span>&nbsp;<span style="color:#569cd6;">boolean</span>&nbsp;<span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">if</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">localStorage</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">getItem</span><span style="color:gainsboro;">(</span><span style="color:#d69d85;">&#39;token&#39;</span><span style="color:gainsboro;">)</span>&nbsp;<span style="color:#b4b4b4;">!=</span>&nbsp;<span style="color:#569cd6;">null</span><span style="color:gainsboro;">){</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">let</span>&nbsp;<span style="color:gainsboro;">roles</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">next</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">data</span><span style="color:gainsboro;">[</span><span style="color:#d69d85;">&#39;permittedRoles&#39;</span><span style="color:gainsboro;">]</span>&nbsp;<span style="color:#569cd6;">as</span>&nbsp;<span style="color:gainsboro;">Array</span><span style="color:gainsboro;">&lt;</span><span style="color:#569cd6;">string</span><span style="color:gainsboro;">&gt;;</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">if</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">roles</span><span style="color:gainsboro;">){</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">if</span><span style="color:gainsboro;">(</span><span style="color:#569cd6;">this</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">service</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">roleMatch</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">roles</span><span style="color:gainsboro;">))</span>&nbsp;<span style="color:#569cd6;">return</span>&nbsp;<span style="color:#569cd6;">true</span><span style="color:gainsboro;">;</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">else</span><span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">this</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">router</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">navigate</span><span style="color:gainsboro;">([</span><span style="color:#d69d85;">&#39;/forbidden&#39;</span><span style="color:gainsboro;">]);</span>&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">return</span>&nbsp;<span style="color:#569cd6;">false</span><span style="color:gainsboro;">;</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">return</span>&nbsp;<span style="color:#569cd6;">true</span><span style="color:gainsboro;">;</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">else</span><span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">this</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">router</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">navigate</span><span style="color:gainsboro;">([</span><span style="color:#d69d85;">&#39;/user/login&#39;</span><span style="color:gainsboro;">]);</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">return</span>&nbsp;<span style="color:#569cd6;">false</span><span style="color:gainsboro;">;</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
    &nbsp;&nbsp;<span style="color:gainsboro;">}</span>
    <span style="color:gainsboro;">}</span></pre>`;
    repositorySafe: SafeHtml;
    repository: string = `<pre style="font-family:Consolas;font-size:13px;color:#dadada;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;using</span>&nbsp;<span style="color:gainsboro;">DemoApi</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Models</span><span style="color:gainsboro;">;</span>
    <span style="color:#569cd6;">using</span>&nbsp;<span style="color:gainsboro;">Microsoft</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">EntityFrameworkCore</span><span style="color:gainsboro;">;</span>
    <span style="color:#569cd6;">using</span>&nbsp;<span style="color:gainsboro;">System</span><span style="color:gainsboro;">;</span>
    <span style="color:#569cd6;">using</span>&nbsp;<span style="color:gainsboro;">System</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Collections</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Generic</span><span style="color:gainsboro;">;</span>
    <span style="color:#569cd6;">using</span>&nbsp;<span style="color:gainsboro;">System</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Linq</span><span style="color:gainsboro;">;</span>
    <span style="color:#569cd6;">using</span>&nbsp;<span style="color:gainsboro;">System</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Linq</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Expressions</span><span style="color:gainsboro;">;</span>
    <span style="color:#569cd6;">using</span>&nbsp;<span style="color:gainsboro;">System</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Threading</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Tasks</span><span style="color:gainsboro;">;</span>

    <span style="color:#569cd6;">namespace</span>&nbsp;<span style="color:gainsboro;">DemoApi</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Repository</span>
    <span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">public</span>&nbsp;<span style="color:#569cd6;">class</span>&nbsp;<span style="color:#4ec9b0;">Repository</span><span style="color:gainsboro;">&lt;</span><span style="color:#b8d7a3;">T</span><span style="color:gainsboro;">&gt;</span>&nbsp;<span style="color:gainsboro;">:</span>&nbsp;<span style="color:gainsboro;">RepositoryBase</span><span style="color:gainsboro;">&lt;</span><span style="color:gainsboro;">T</span><span style="color:gainsboro;">&gt;,</span>&nbsp;<span style="color:gainsboro;">IRepository</span><span style="color:gainsboro;">&lt;</span><span style="color:gainsboro;">T</span><span style="color:gainsboro;">&gt;</span>&nbsp;<span style="color:#569cd6;">where</span>&nbsp;<span style="color:gainsboro;">T</span>&nbsp;<span style="color:gainsboro;">:</span>&nbsp;<span style="color:#569cd6;">class</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">public</span>&nbsp;<span style="color:#4ec9b0;">Repository</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">JungleDbContext</span>&nbsp;<span style="color:#9cdcfe;">dbContext</span><span style="color:gainsboro;">)</span>&nbsp;<span style="color:gainsboro;">:</span>&nbsp;<span style="color:#569cd6;">base</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">dbContext</span><span style="color:gainsboro;">)</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">public</span>&nbsp;<span style="color:#569cd6;">async</span>&nbsp;<span style="color:gainsboro;">Task</span><span style="color:gainsboro;">&lt;</span><span style="color:gainsboro;">T</span><span style="color:gainsboro;">&gt;</span>&nbsp;<span style="color:#dcdcaa;">Delete</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">T</span>&nbsp;<span style="color:#9cdcfe;">entity</span><span style="color:gainsboro;">)</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">_dbSet</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Remove</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">entity</span><span style="color:gainsboro;">);</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">await</span>&nbsp;<span style="color:gainsboro;">_dbContext</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">SaveChangesAsync</span><span style="color:gainsboro;">();</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:gainsboro;">entity</span><span style="color:gainsboro;">;</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">public</span>&nbsp;<span style="color:#569cd6;">async</span>&nbsp;<span style="color:gainsboro;">Task</span><span style="color:gainsboro;">&lt;</span><span style="color:gainsboro;">T</span><span style="color:gainsboro;">&gt;</span>&nbsp;<span style="color:#dcdcaa;">Get</span><span style="color:gainsboro;">(</span><span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">id</span><span style="color:gainsboro;">)</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:#569cd6;">await</span>&nbsp;<span style="color:gainsboro;">_dbSet</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">FindAsync</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">id</span><span style="color:gainsboro;">);</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">public</span>&nbsp;<span style="color:#569cd6;">async</span>&nbsp;<span style="color:gainsboro;">Task</span><span style="color:gainsboro;">&lt;</span><span style="color:gainsboro;">T</span><span style="color:gainsboro;">&gt;</span>&nbsp;<span style="color:#dcdcaa;">Get</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">Expression</span><span style="color:gainsboro;">&lt;</span><span style="color:gainsboro;">Func</span><span style="color:gainsboro;">&lt;</span><span style="color:gainsboro;">T</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:#569cd6;">bool</span><span style="color:gainsboro;">&gt;&gt;</span>&nbsp;<span style="color:#9cdcfe;">predicate</span><span style="color:gainsboro;">)</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:#569cd6;">await</span>&nbsp;<span style="color:gainsboro;">_dbSet</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">AsQueryable</span><span style="color:gainsboro;">()</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Where</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">predicate</span><span style="color:gainsboro;">)</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">FirstOrDefaultAsync</span><span style="color:gainsboro;">();</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">public</span>&nbsp;<span style="color:#569cd6;">async</span>&nbsp;<span style="color:gainsboro;">Task</span><span style="color:gainsboro;">&lt;</span><span style="color:gainsboro;">List</span><span style="color:gainsboro;">&lt;</span><span style="color:gainsboro;">T</span><span style="color:gainsboro;">&gt;&gt;</span>&nbsp;<span style="color:#dcdcaa;">GetAll</span><span style="color:gainsboro;">()</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:#569cd6;">await</span>&nbsp;<span style="color:gainsboro;">_dbSet</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">ToListAsync</span><span style="color:gainsboro;">();</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">public</span>&nbsp;<span style="color:#569cd6;">async</span>&nbsp;<span style="color:gainsboro;">Task</span><span style="color:gainsboro;">&lt;</span><span style="color:gainsboro;">List</span><span style="color:gainsboro;">&lt;</span><span style="color:gainsboro;">T</span><span style="color:gainsboro;">&gt;&gt;</span>&nbsp;<span style="color:#dcdcaa;">GetAll</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">Expression</span><span style="color:gainsboro;">&lt;</span><span style="color:gainsboro;">Func</span><span style="color:gainsboro;">&lt;</span><span style="color:gainsboro;">T</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:#569cd6;">bool</span><span style="color:gainsboro;">&gt;&gt;</span>&nbsp;<span style="color:#9cdcfe;">predicate</span><span style="color:gainsboro;">)</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:#569cd6;">await</span>&nbsp;<span style="color:gainsboro;">_dbSet</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">AsQueryable</span><span style="color:gainsboro;">()</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Where</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">predicate</span><span style="color:gainsboro;">)</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">ToListAsync</span><span style="color:gainsboro;">();</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">public</span>&nbsp;<span style="color:#569cd6;">async</span>&nbsp;<span style="color:gainsboro;">Task</span><span style="color:gainsboro;">&lt;</span><span style="color:gainsboro;">T</span><span style="color:gainsboro;">&gt;</span>&nbsp;<span style="color:#dcdcaa;">Post</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">T</span>&nbsp;<span style="color:#9cdcfe;">entity</span><span style="color:gainsboro;">)</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">_dbSet</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Add</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">entity</span><span style="color:gainsboro;">);</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">await</span>&nbsp;<span style="color:gainsboro;">_dbContext</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">SaveChangesAsync</span><span style="color:gainsboro;">();</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:gainsboro;">entity</span><span style="color:gainsboro;">;</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">public</span>&nbsp;<span style="color:#569cd6;">async</span>&nbsp;<span style="color:gainsboro;">Task</span><span style="color:gainsboro;">&lt;</span><span style="color:gainsboro;">T</span><span style="color:gainsboro;">&gt;</span>&nbsp;<span style="color:#dcdcaa;">Put</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">T</span>&nbsp;<span style="color:#9cdcfe;">entity</span><span style="color:gainsboro;">)</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">_dbSet</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Attach</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">entity</span><span style="color:gainsboro;">);</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">_dbContext</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Entry</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">entity</span><span style="color:gainsboro;">)</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">State</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">EntityState</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Modified</span><span style="color:gainsboro;">;</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">await</span>&nbsp;<span style="color:gainsboro;">_dbContext</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">SaveChangesAsync</span><span style="color:gainsboro;">();</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:gainsboro;">entity</span><span style="color:gainsboro;">;</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
    <span style="color:gainsboro;">}</span></pre>`;

    repositoryBaseSafe: SafeHtml;
    repositoryBase: string = `<pre style="font-family:Consolas;font-size:13px;color:#dadada;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;using</span>&nbsp;<span style="color:gainsboro;">DemoApi</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Models</span><span style="color:gainsboro;">;</span>
    <span style="color:#569cd6;">using</span>&nbsp;<span style="color:gainsboro;">Microsoft</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">EntityFrameworkCore</span><span style="color:gainsboro;">;</span>
    <span style="color:#569cd6;">using</span>&nbsp;<span style="color:gainsboro;">System</span><span style="color:gainsboro;">;</span>

    <span style="color:#569cd6;">namespace</span>&nbsp;<span style="color:gainsboro;">DemoApi</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Repository</span>
    <span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">public</span>&nbsp;<span style="color:#569cd6;">abstract</span>&nbsp;<span style="color:#569cd6;">class</span>&nbsp;<span style="color:#4ec9b0;">RepositoryBase</span><span style="color:gainsboro;">&lt;</span><span style="color:#b8d7a3;">T</span><span style="color:gainsboro;">&gt;</span>&nbsp;<span style="color:gainsboro;">:</span>&nbsp;<span style="color:gainsboro;">IDisposable</span>&nbsp;<span style="color:#569cd6;">where</span>&nbsp;<span style="color:gainsboro;">T</span>&nbsp;<span style="color:gainsboro;">:</span>&nbsp;<span style="color:#569cd6;">class</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">protected</span>&nbsp;<span style="color:#569cd6;">internal</span>&nbsp;<span style="color:#569cd6;">readonly</span>&nbsp;<span style="color:gainsboro;">JungleDbContext</span>&nbsp;<span style="color:gainsboro;">_dbContext</span><span style="color:gainsboro;">;</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">protected</span>&nbsp;<span style="color:#569cd6;">internal</span>&nbsp;<span style="color:#569cd6;">readonly</span>&nbsp;<span style="color:gainsboro;">DbSet</span><span style="color:gainsboro;">&lt;</span><span style="color:gainsboro;">T</span><span style="color:gainsboro;">&gt;</span>&nbsp;<span style="color:gainsboro;">_dbSet</span><span style="color:gainsboro;">;</span>

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">protected</span>&nbsp;<span style="color:#4ec9b0;">RepositoryBase</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">JungleDbContext</span>&nbsp;<span style="color:#9cdcfe;">dbContext</span><span style="color:gainsboro;">)</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">_dbContext</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">dbContext</span><span style="color:gainsboro;">;</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">_dbSet</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">_dbContext</span><span style="color:#b4b4b4;">?.</span><span style="color:gainsboro;">Set</span><span style="color:gainsboro;">&lt;</span><span style="color:gainsboro;">T</span><span style="color:gainsboro;">&gt;();</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">public</span>&nbsp;<span style="color:#569cd6;">void</span>&nbsp;<span style="color:#dcdcaa;">Dispose</span><span style="color:gainsboro;">()</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">_dbContext</span><span style="color:#b4b4b4;">?.</span><span style="color:gainsboro;">Dispose</span><span style="color:gainsboro;">();</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
    <span style="color:gainsboro;">}</span>
    </pre>`;

    iRepositorySafe: SafeHtml;
    iRepository: string = `<pre style="font-family:Consolas;font-size:13px;color:#dadada;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;using</span>&nbsp;<span style="color:gainsboro;">System</span><span style="color:gainsboro;">;</span>
    <span style="color:#569cd6;">using</span>&nbsp;<span style="color:gainsboro;">System</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Collections</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Generic</span><span style="color:gainsboro;">;</span>
    <span style="color:#569cd6;">using</span>&nbsp;<span style="color:gainsboro;">System</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Linq</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Expressions</span><span style="color:gainsboro;">;</span>
    <span style="color:#569cd6;">using</span>&nbsp;<span style="color:gainsboro;">System</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Threading</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Tasks</span><span style="color:gainsboro;">;</span>

    <span style="color:#569cd6;">namespace</span>&nbsp;<span style="color:gainsboro;">DemoApi</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Repository</span>
    <span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">public</span>&nbsp;<span style="color:#569cd6;">interface</span>&nbsp;<span style="color:#b8d7a3;">IRepository</span><span style="color:gainsboro;">&lt;</span><span style="color:#b8d7a3;">T</span><span style="color:gainsboro;">&gt;</span>&nbsp;<span style="color:#569cd6;">where</span>&nbsp;<span style="color:gainsboro;">T</span>&nbsp;<span style="color:gainsboro;">:</span>&nbsp;<span style="color:#569cd6;">class</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">Task</span><span style="color:gainsboro;">&lt;</span><span style="color:gainsboro;">List</span><span style="color:gainsboro;">&lt;</span><span style="color:gainsboro;">T</span><span style="color:gainsboro;">&gt;&gt;</span>&nbsp;<span style="color:#dcdcaa;">GetAll</span><span style="color:gainsboro;">();</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">Task</span><span style="color:gainsboro;">&lt;</span><span style="color:gainsboro;">List</span><span style="color:gainsboro;">&lt;</span><span style="color:gainsboro;">T</span><span style="color:gainsboro;">&gt;&gt;</span>&nbsp;<span style="color:#dcdcaa;">GetAll</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">Expression</span><span style="color:gainsboro;">&lt;</span><span style="color:gainsboro;">Func</span><span style="color:gainsboro;">&lt;</span><span style="color:gainsboro;">T</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:#569cd6;">bool</span><span style="color:gainsboro;">&gt;&gt;</span>&nbsp;<span style="color:#9cdcfe;">predicate</span><span style="color:gainsboro;">);</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">Task</span><span style="color:gainsboro;">&lt;</span><span style="color:gainsboro;">T</span><span style="color:gainsboro;">&gt;</span>&nbsp;<span style="color:#dcdcaa;">Get</span><span style="color:gainsboro;">(</span><span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">id</span><span style="color:gainsboro;">);</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">Task</span><span style="color:gainsboro;">&lt;</span><span style="color:gainsboro;">T</span><span style="color:gainsboro;">&gt;</span>&nbsp;<span style="color:#dcdcaa;">Get</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">Expression</span><span style="color:gainsboro;">&lt;</span><span style="color:gainsboro;">Func</span><span style="color:gainsboro;">&lt;</span><span style="color:gainsboro;">T</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:#569cd6;">bool</span><span style="color:gainsboro;">&gt;&gt;</span>&nbsp;<span style="color:#9cdcfe;">predicate</span><span style="color:gainsboro;">);</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">Task</span><span style="color:gainsboro;">&lt;</span><span style="color:gainsboro;">T</span><span style="color:gainsboro;">&gt;</span>&nbsp;<span style="color:#dcdcaa;">Post</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">T</span>&nbsp;<span style="color:#9cdcfe;">entity</span><span style="color:gainsboro;">);</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">Task</span><span style="color:gainsboro;">&lt;</span><span style="color:gainsboro;">T</span><span style="color:gainsboro;">&gt;</span>&nbsp;<span style="color:#dcdcaa;">Put</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">T</span>&nbsp;<span style="color:#9cdcfe;">entity</span><span style="color:gainsboro;">);</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">Task</span><span style="color:gainsboro;">&lt;</span><span style="color:gainsboro;">T</span><span style="color:gainsboro;">&gt;</span>&nbsp;<span style="color:#dcdcaa;">Delete</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">T</span>&nbsp;<span style="color:#9cdcfe;">entity</span><span style="color:gainsboro;">);</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
    <span style="color:gainsboro;">}</span></pre>`;

    iCustomerServiceSafe: SafeHtml;
    iCustomerService: string = `<pre style="font-family:Consolas;font-size:13px;color:#dadada;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;using</span>&nbsp;<span style="color:gainsboro;">DemoApi</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Models</span><span style="color:gainsboro;">;</span>
    <span style="color:#569cd6;">using</span>&nbsp;<span style="color:gainsboro;">System</span><span style="color:gainsboro;">;</span>
    <span style="color:#569cd6;">using</span>&nbsp;<span style="color:gainsboro;">System</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Collections</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Generic</span><span style="color:gainsboro;">;</span>
    <span style="color:#569cd6;">using</span><span style="color:gainsboro;">&nbsp;</span><span style="color:gainsboro;">System</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Linq</span><span style="color:gainsboro;">;</span>
    <span style="color:#569cd6;">using</span>&nbsp;<span style="color:gainsboro;">System</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Linq</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Expressions</span><span style="color:gainsboro;">;</span>
    <span style="color:#569cd6;">using</span>&nbsp;<span style="color:gainsboro;">System</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Threading</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Tasks</span><span style="color:gainsboro;">;</span>

    <span style="color:#569cd6;">namespace</span>&nbsp;<span style="color:gainsboro;">DemoApi</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Services</span>
    <span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">public</span>&nbsp;<span style="color:#569cd6;">interface</span>&nbsp;<span style="color:#b8d7a3;">ICustomerService</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">Task</span><span style="color:gainsboro;">&lt;</span><span style="color:gainsboro;">List</span><span style="color:gainsboro;">&lt;</span><span style="color:gainsboro;">Customer</span><span style="color:gainsboro;">&gt;&gt;</span>&nbsp;<span style="color:#dcdcaa;">GetCustomers</span><span style="color:gainsboro;">();</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">Task</span><span style="color:gainsboro;">&lt;</span><span style="color:gainsboro;">List</span><span style="color:gainsboro;">&lt;</span><span style="color:gainsboro;">Customer</span><span style="color:gainsboro;">&gt;&gt;</span>&nbsp;<span style="color:#dcdcaa;">GetCustomers</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">Expression</span><span style="color:gainsboro;">&lt;</span><span style="color:gainsboro;">Func</span><span style="color:gainsboro;">&lt;</span><span style="color:gainsboro;">Customer</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:#569cd6;">bool</span><span style="color:gainsboro;">&gt;&gt;</span>&nbsp;<span style="color:#9cdcfe;">predicate</span><span style="color:gainsboro;">);</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">Task</span><span style="color:gainsboro;">&lt;</span><span style="color:gainsboro;">Customer</span><span style="color:gainsboro;">&gt;</span>&nbsp;<span style="color:#dcdcaa;">GetCustomer</span><span style="color:gainsboro;">(</span><span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">id</span><span style="color:gainsboro;">);</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">Task</span><span style="color:gainsboro;">&lt;</span><span style="color:gainsboro;">Customer</span><span style="color:gainsboro;">&gt;</span>&nbsp;<span style="color:#dcdcaa;">GetCustomer</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">Expression</span><span style="color:gainsboro;">&lt;</span><span style="color:gainsboro;">Func</span><span style="color:gainsboro;">&lt;</span><span style="color:gainsboro;">Customer</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:#569cd6;">bool</span><span style="color:gainsboro;">&gt;&gt;</span>&nbsp;<span style="color:#9cdcfe;">predicate</span><span style="color:gainsboro;">);</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">Task</span><span style="color:gainsboro;">&lt;</span><span style="color:gainsboro;">Customer</span><span style="color:gainsboro;">&gt;</span>&nbsp;<span style="color:#dcdcaa;">PostCustomer</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">Customer</span>&nbsp;<span style="color:#9cdcfe;">customer</span><span style="color:gainsboro;">);</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">Task</span><span style="color:gainsboro;">&lt;</span><span style="color:gainsboro;">Customer</span><span style="color:gainsboro;">&gt;</span>&nbsp;<span style="color:#dcdcaa;">PutCustomer</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">Customer</span>&nbsp;<span style="color:#9cdcfe;">customer</span><span style="color:gainsboro;">);</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">Task</span><span style="color:gainsboro;">&lt;</span><span style="color:gainsboro;">Customer</span><span style="color:gainsboro;">&gt;</span>&nbsp;<span style="color:#dcdcaa;">DeleteCustomer</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">Customer</span>&nbsp;<span style="color:#9cdcfe;">customer</span><span style="color:gainsboro;">);</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
    <span style="color:gainsboro;">}</span>
    </pre>`;

    servicesBaseSafe: SafeHtml;
    servicesBase: string = `<pre style="font-family:Consolas;font-size:13px;color:#dadada;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;using</span>&nbsp;<span style="color:gainsboro;">DemoApi</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Repository</span><span style="color:gainsboro;">;</span>

    <span style="color:#569cd6;">namespace</span>&nbsp;<span style="color:gainsboro;">DemoApi</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Services</span>
    <span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">public</span>&nbsp;<span style="color:#569cd6;">abstract</span>&nbsp;<span style="color:#569cd6;">class</span>&nbsp;<span style="color:#4ec9b0;">ServicesBase</span><span style="color:gainsboro;">&lt;</span><span style="color:#b8d7a3;">T</span><span style="color:gainsboro;">&gt;</span>&nbsp;<span style="color:#569cd6;">where</span>&nbsp;<span style="color:gainsboro;">T</span>&nbsp;<span style="color:gainsboro;">:</span>&nbsp;<span style="color:#569cd6;">class</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">protected</span>&nbsp;<span style="color:#569cd6;">readonly</span>&nbsp;<span style="color:gainsboro;">IRepository</span><span style="color:gainsboro;">&lt;</span><span style="color:gainsboro;">T</span><span style="color:gainsboro;">&gt;</span>&nbsp;<span style="color:gainsboro;">_repo</span><span style="color:gainsboro;">;</span>

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">protected</span>&nbsp;<span style="color:#4ec9b0;">ServicesBase</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">IRepository</span><span style="color:gainsboro;">&lt;</span><span style="color:gainsboro;">T</span><span style="color:gainsboro;">&gt;</span>&nbsp;<span style="color:#9cdcfe;">repo</span><span style="color:gainsboro;">)</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">_repo</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">repo</span><span style="color:gainsboro;">;</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
    <span style="color:gainsboro;">}</span>
    </pre>`;

    apiControllerSafe: SafeHtml;
    apiController: string = `<pre style="font-family:Consolas;font-size:13px;color:#dadada;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;using</span>&nbsp;<span style="color:gainsboro;">DemoApi</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Models</span><span style="color:gainsboro;">;</span>
    <span style="color:#569cd6;">using</span>&nbsp;<span style="color:gainsboro;">DemoApi</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Services</span><span style="color:gainsboro;">;</span>
    <span style="color:#569cd6;">using</span>&nbsp;<span style="color:gainsboro;">Microsoft</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">AspNetCore</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Mvc</span><span style="color:gainsboro;">;</span>
    <span style="color:#569cd6;">using</span>&nbsp;<span style="color:gainsboro;">Microsoft</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">EntityFrameworkCore</span><span style="color:gainsboro;">;</span>
    <span style="color:#569cd6;">using</span>&nbsp;<span style="color:gainsboro;">System</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Collections</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Generic</span><span style="color:gainsboro;">;</span>
    <span style="color:#569cd6;">using</span>&nbsp;<span style="color:gainsboro;">System</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Threading</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Tasks</span><span style="color:gainsboro;">;</span>

    <span style="color:#569cd6;">namespace</span>&nbsp;<span style="color:gainsboro;">DemoApi</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Controllers</span>
    <span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">[</span><span style="color:gainsboro;">Route</span><span style="color:gainsboro;">(</span><span style="color:#d69d85;">&quot;api/[controller]&quot;</span><span style="color:gainsboro;">)]</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">[</span><span style="color:gainsboro;">ApiController</span><span style="color:gainsboro;">]</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">public</span>&nbsp;<span style="color:#569cd6;">class</span>&nbsp;<span style="color:#4ec9b0;">CustomersController</span>&nbsp;<span style="color:gainsboro;">:</span>&nbsp;<span style="color:gainsboro;">ControllerBase</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">private</span>&nbsp;<span style="color:#569cd6;">readonly</span>&nbsp;<span style="color:gainsboro;">ICustomerService</span>&nbsp;<span style="color:gainsboro;">_customerService</span><span style="color:gainsboro;">;</span>

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">public</span>&nbsp;<span style="color:#4ec9b0;">CustomersController</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">ICustomerService</span>&nbsp;<span style="color:#9cdcfe;">customerService</span><span style="color:gainsboro;">)</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">_customerService</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">customerService</span><span style="color:gainsboro;">;</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;GET:&nbsp;api/Customers</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">[</span><span style="color:gainsboro;">HttpGet</span><span style="color:gainsboro;">]</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">public</span>&nbsp;<span style="color:#569cd6;">async</span>&nbsp;<span style="color:gainsboro;">Task</span><span style="color:gainsboro;">&lt;</span><span style="color:gainsboro;">ActionResult</span><span style="color:gainsboro;">&lt;</span><span style="color:gainsboro;">IEnumerable</span><span style="color:gainsboro;">&lt;</span><span style="color:gainsboro;">Customer</span><span style="color:gainsboro;">&gt;&gt;&gt;</span>&nbsp;<span style="color:#dcdcaa;">GetCustomers</span><span style="color:gainsboro;">()</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:#569cd6;">await</span>&nbsp;<span style="color:gainsboro;">_customerService</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">GetCustomers</span><span style="color:gainsboro;">();</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;GET:&nbsp;api/Customers/5</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">[</span><span style="color:gainsboro;">HttpGet</span><span style="color:gainsboro;">(</span><span style="color:#d69d85;">&quot;{id}&quot;</span><span style="color:gainsboro;">)]</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">public</span>&nbsp;<span style="color:#569cd6;">async</span>&nbsp;<span style="color:gainsboro;">Task</span><span style="color:gainsboro;">&lt;</span><span style="color:gainsboro;">ActionResult</span><span style="color:gainsboro;">&lt;</span><span style="color:gainsboro;">Customer</span><span style="color:gainsboro;">&gt;&gt;</span>&nbsp;<span style="color:#dcdcaa;">GetCustomer</span><span style="color:gainsboro;">(</span><span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">id</span><span style="color:gainsboro;">)</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">var</span>&nbsp;<span style="color:#9cdcfe;">customer</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">await</span>&nbsp;<span style="color:gainsboro;">_customerService</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">GetCustomer</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">id</span><span style="color:gainsboro;">);</span>

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:gainsboro;">customer</span>&nbsp;<span style="color:#b4b4b4;">==</span>&nbsp;<span style="color:#569cd6;">null</span><span style="color:gainsboro;">)</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:gainsboro;">NotFound</span><span style="color:gainsboro;">();</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:gainsboro;">customer</span><span style="color:gainsboro;">;</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;PUT:&nbsp;api/Customers/5</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;To&nbsp;protect&nbsp;from&nbsp;overposting&nbsp;attacks,&nbsp;enable&nbsp;the&nbsp;specific&nbsp;properties&nbsp;you&nbsp;want&nbsp;to&nbsp;bind&nbsp;to,&nbsp;for</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;more&nbsp;details,&nbsp;see&nbsp;https://go.microsoft.com/fwlink/?linkid=2123754.</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">[</span><span style="color:gainsboro;">HttpPut</span><span style="color:gainsboro;">(</span><span style="color:#d69d85;">&quot;{id}&quot;</span><span style="color:gainsboro;">)]</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">public</span>&nbsp;<span style="color:#569cd6;">async</span>&nbsp;<span style="color:gainsboro;">Task</span><span style="color:gainsboro;">&lt;</span><span style="color:gainsboro;">IActionResult</span><span style="color:gainsboro;">&gt;</span>&nbsp;<span style="color:#dcdcaa;">PutCustomer</span><span style="color:gainsboro;">(</span><span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">id</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:gainsboro;">Customer</span>&nbsp;<span style="color:#9cdcfe;">customer</span><span style="color:gainsboro;">)</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:gainsboro;">id</span>&nbsp;<span style="color:#b4b4b4;">!=</span>&nbsp;<span style="color:gainsboro;">customer</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">CustomerId</span><span style="color:gainsboro;">)</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:gainsboro;">BadRequest</span><span style="color:gainsboro;">();</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">try</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">await</span>&nbsp;<span style="color:gainsboro;">_customerService</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">PutCustomer</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">customer</span><span style="color:gainsboro;">);</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">catch</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:gainsboro;">DbUpdateConcurrencyException</span><span style="color:gainsboro;">)</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:#b4b4b4;">!</span><span style="color:gainsboro;">(</span><span style="color:#569cd6;">await</span>&nbsp;<span style="color:gainsboro;">CustomerExists</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">id</span><span style="color:gainsboro;">)</span><span style="color:gainsboro;">)</span><span style="color:gainsboro;">)</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:gainsboro;">NotFound</span><span style="color:gainsboro;">();</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">else</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">throw</span><span style="color:gainsboro;">;</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:gainsboro;">NoContent</span><span style="color:gainsboro;">();</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;POST:&nbsp;api/Customers</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;To&nbsp;protect&nbsp;from&nbsp;overposting&nbsp;attacks,&nbsp;enable&nbsp;the&nbsp;specific&nbsp;properties&nbsp;you&nbsp;want&nbsp;to&nbsp;bind&nbsp;to,&nbsp;for</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;more&nbsp;details,&nbsp;see&nbsp;https://go.microsoft.com/fwlink/?linkid=2123754.</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">[</span><span style="color:gainsboro;">HttpPost</span><span style="color:gainsboro;">]</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">public</span>&nbsp;<span style="color:#569cd6;">async</span>&nbsp;<span style="color:gainsboro;">Task</span><span style="color:gainsboro;">&lt;</span><span style="color:gainsboro;">ActionResult</span><span style="color:gainsboro;">&lt;</span><span style="color:gainsboro;">Customer</span><span style="color:gainsboro;">&gt;&gt;</span>&nbsp;<span style="color:#dcdcaa;">PostCustomer</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">Customer</span>&nbsp;<span style="color:#9cdcfe;">customer</span><span style="color:gainsboro;">)</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">await</span>&nbsp;<span style="color:gainsboro;">_customerService</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">PostCustomer</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">customer</span><span style="color:gainsboro;">);</span>

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:gainsboro;">CreatedAtAction</span><span style="color:gainsboro;">(</span><span style="color:#d69d85;">&quot;GetCustomer&quot;</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:#569cd6;">new</span>&nbsp;<span style="color:gainsboro;">{</span>&nbsp;<span style="color:gainsboro;">id</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">customer</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">CustomerId</span>&nbsp;<span style="color:gainsboro;">},</span>&nbsp;<span style="color:gainsboro;">customer</span><span style="color:gainsboro;">);</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;DELETE:&nbsp;api/Customers/5</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">[</span><span style="color:gainsboro;">HttpDelete</span><span style="color:gainsboro;">(</span><span style="color:#d69d85;">&quot;{id}&quot;</span><span style="color:gainsboro;">)]</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">public</span>&nbsp;<span style="color:#569cd6;">async</span>&nbsp;<span style="color:gainsboro;">Task</span><span style="color:gainsboro;">&lt;</span><span style="color:gainsboro;">ActionResult</span><span style="color:gainsboro;">&lt;</span><span style="color:gainsboro;">Customer</span><span style="color:gainsboro;">&gt;&gt;</span>&nbsp;<span style="color:#dcdcaa;">DeleteCustomer</span><span style="color:gainsboro;">(</span><span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">id</span><span style="color:gainsboro;">)</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">var</span>&nbsp;<span style="color:#9cdcfe;">customer</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">await</span>&nbsp;<span style="color:gainsboro;">_customerService</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">GetCustomer</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">id</span><span style="color:gainsboro;">);</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:gainsboro;">customer</span>&nbsp;<span style="color:#b4b4b4;">==</span>&nbsp;<span style="color:#569cd6;">null</span><span style="color:gainsboro;">)</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:gainsboro;">NotFound</span><span style="color:gainsboro;">();</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">await</span>&nbsp;<span style="color:gainsboro;">_customerService</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">DeleteCustomer</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">customer</span><span style="color:gainsboro;">);</span>

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:gainsboro;">customer</span><span style="color:gainsboro;">;</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">[</span><span style="color:gainsboro;">Route</span><span style="color:gainsboro;">(</span><span style="color:#d69d85;">&quot;exists/{id}&quot;</span><span style="color:gainsboro;">)]</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">[</span><span style="color:gainsboro;">HttpGet</span><span style="color:gainsboro;">]</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">public</span>&nbsp;<span style="color:#569cd6;">async</span>&nbsp;<span style="color:gainsboro;">Task</span><span style="color:gainsboro;">&lt;</span><span style="color:#569cd6;">bool</span><span style="color:gainsboro;">&gt;</span>&nbsp;<span style="color:#dcdcaa;">CustomerExists</span><span style="color:gainsboro;">(</span><span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">id</span><span style="color:gainsboro;">)</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">var</span>&nbsp;<span style="color:#9cdcfe;">customer</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">await</span>&nbsp;<span style="color:gainsboro;">_customerService</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">GetCustomer</span><span style="color:gainsboro;">(</span><span style="color:#9cdcfe;">e</span>&nbsp;<span style="color:#b4b4b4;">=&gt;</span>&nbsp;<span style="color:gainsboro;">e</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">CustomerId</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Equals</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">id</span><span style="color:gainsboro;">));</span>

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:gainsboro;">customer</span>&nbsp;<span style="color:#b4b4b4;">!=</span>&nbsp;<span style="color:#569cd6;">null</span><span style="color:gainsboro;">;</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
    <span style="color:gainsboro;">}</span>
    </pre>`;

    registerServicesSafe: SafeHtml;
    registerServices: string = `<pre style="font-family:Consolas;font-size:13px;color:#dadada;background:#1e1e1e;"><span style="color:gainsboro;">&nbsp;&nbsp;services</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">AddScoped</span><span style="color:gainsboro;">(</span><span style="color:#569cd6;">typeof</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">IRepository</span><span style="color:gainsboro;">&lt;&gt;),</span>&nbsp;<span style="color:#569cd6;">typeof</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">Repository</span><span style="color:gainsboro;">&lt;&gt;));</span>
    <span style="color:gainsboro;">services</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">AddScoped</span><span style="color:gainsboro;">&lt;</span><span style="color:gainsboro;">ICustomerService</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:gainsboro;">CustomerService</span><span style="color:gainsboro;">&gt;();</span></pre>`;

    customerServiceApiSafe: SafeHtml;
    customerServiceApi: string = `<pre style="font-family:Consolas;font-size:13px;color:#dadada;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;using</span>&nbsp;<span style="color:gainsboro;">DemoApi</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Models</span><span style="color:gainsboro;">;</span>
    <span style="color:#569cd6;">using</span>&nbsp;<span style="color:gainsboro;">DemoApi</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Repository</span><span style="color:gainsboro;">;</span>
    <span style="color:#569cd6;">using</span>&nbsp;<span style="color:gainsboro;">System</span><span style="color:gainsboro;">;</span>
    <span style="color:#569cd6;">using</span>&nbsp;<span style="color:gainsboro;">System</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Collections</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Generic</span><span style="color:gainsboro;">;</span>
    <span style="color:#569cd6;">using</span>&nbsp;<span style="color:gainsboro;">System</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Linq</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Expressions</span><span style="color:gainsboro;">;</span>
    <span style="color:#569cd6;">using</span>&nbsp;<span style="color:gainsboro;">System</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Threading</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Tasks</span><span style="color:gainsboro;">;</span>

    <span style="color:#569cd6;">namespace</span>&nbsp;<span style="color:gainsboro;">DemoApi</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Services</span>
    <span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">public</span>&nbsp;<span style="color:#569cd6;">class</span>&nbsp;<span style="color:#4ec9b0;">CustomerService</span>&nbsp;<span style="color:gainsboro;">:</span>&nbsp;<span style="color:gainsboro;">ServicesBase</span><span style="color:gainsboro;">&lt;</span><span style="color:gainsboro;">Customer</span><span style="color:gainsboro;">&gt;,</span>&nbsp;<span style="color:gainsboro;">ICustomerService</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">&nbsp;public</span>&nbsp;<span style="color:#4ec9b0;">CustomerService</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">IRepository</span><span style="color:gainsboro;">&lt;</span><span style="color:gainsboro;">Customer</span><span style="color:gainsboro;">&gt;</span>&nbsp;<span style="color:#9cdcfe;">repo</span><span style="color:gainsboro;">)</span>&nbsp;<span style="color:gainsboro;">:</span>&nbsp;<span style="color:#569cd6;">base</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">repo</span><span style="color:gainsboro;">)</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">public</span>&nbsp;<span style="color:#569cd6;">async</span>&nbsp;<span style="color:gainsboro;">Task</span><span style="color:gainsboro;">&lt;</span><span style="color:gainsboro;">Customer</span><span style="color:gainsboro;">&gt;</span>&nbsp;<span style="color:#dcdcaa;">DeleteCustomer</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">Customer</span>&nbsp;<span style="color:#9cdcfe;">customer</span><span style="color:gainsboro;">)</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:#569cd6;">await</span>&nbsp;<span style="color:gainsboro;">_repo</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Delete</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">customer</span><span style="color:gainsboro;">);</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">public</span>&nbsp;<span style="color:#569cd6;">async</span>&nbsp;<span style="color:gainsboro;">Task</span><span style="color:gainsboro;">&lt;</span><span style="color:gainsboro;">Customer</span><span style="color:gainsboro;">&gt;</span>&nbsp;<span style="color:#dcdcaa;">GetCustomer</span><span style="color:gainsboro;">(</span><span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">id</span><span style="color:gainsboro;">)</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:#569cd6;">await</span>&nbsp;<span style="color:gainsboro;">_repo</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Get</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">id</span><span style="color:gainsboro;">);</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">public</span>&nbsp;<span style="color:#569cd6;">async</span>&nbsp;<span style="color:gainsboro;">Task</span><span style="color:gainsboro;">&lt;</span><span style="color:gainsboro;">Customer</span><span style="color:gainsboro;">&gt;</span>&nbsp;<span style="color:#dcdcaa;">GetCustomer</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">Expression</span><span style="color:gainsboro;">&lt;</span><span style="color:gainsboro;">Func</span><span style="color:gainsboro;">&lt;</span><span style="color:gainsboro;">Customer</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:#569cd6;">bool</span><span style="color:gainsboro;">&gt;&gt;</span>&nbsp;<span style="color:#9cdcfe;">predicate</span><span style="color:gainsboro;">)</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:#569cd6;">await</span>&nbsp;<span style="color:gainsboro;">_repo</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Get</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">predicate</span><span style="color:gainsboro;">);</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">public</span>&nbsp;<span style="color:#569cd6;">async</span>&nbsp;<span style="color:gainsboro;">Task</span><span style="color:gainsboro;">&lt;</span><span style="color:gainsboro;">List</span><span style="color:gainsboro;">&lt;</span><span style="color:gainsboro;">Customer</span><span style="color:gainsboro;">&gt;&gt;</span>&nbsp;<span style="color:#dcdcaa;">GetCustomers</span><span style="color:gainsboro;">()</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:#569cd6;">await</span>&nbsp;<span style="color:gainsboro;">_repo</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">GetAll</span><span style="color:gainsboro;">();</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">public</span>&nbsp;<span style="color:#569cd6;">async</span>&nbsp;<span style="color:gainsboro;">Task</span><span style="color:gainsboro;">&lt;</span><span style="color:gainsboro;">List</span><span style="color:gainsboro;">&lt;</span><span style="color:gainsboro;">Customer</span><span style="color:gainsboro;">&gt;&gt;</span>&nbsp;<span style="color:#dcdcaa;">GetCustomers</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">Expression</span><span style="color:gainsboro;">&lt;</span><span style="color:gainsboro;">Func</span><span style="color:gainsboro;">&lt;</span><span style="color:gainsboro;">Customer</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:#569cd6;">bool</span><span style="color:gainsboro;">&gt;&gt;</span>&nbsp;<span style="color:#9cdcfe;">predicate</span><span style="color:gainsboro;">)</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:#569cd6;">await</span>&nbsp;<span style="color:gainsboro;">_repo</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">GetAll</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">predicate</span><span style="color:gainsboro;">);</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">public</span>&nbsp;<span style="color:#569cd6;">async</span>&nbsp;<span style="color:gainsboro;">Task</span><span style="color:gainsboro;">&lt;</span><span style="color:gainsboro;">Customer</span><span style="color:gainsboro;">&gt;</span>&nbsp;<span style="color:#dcdcaa;">PostCustomer</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">Customer</span>&nbsp;<span style="color:#9cdcfe;">customer</span><span style="color:gainsboro;">)</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:#569cd6;">await</span>&nbsp;<span style="color:gainsboro;">_repo</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Post</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">customer</span><span style="color:gainsboro;">);</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">public</span>&nbsp;<span style="color:#569cd6;">async</span>&nbsp;<span style="color:gainsboro;">Task</span><span style="color:gainsboro;">&lt;</span><span style="color:gainsboro;">Customer</span><span style="color:gainsboro;">&gt;</span>&nbsp;<span style="color:#dcdcaa;">PutCustomer</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">Customer</span>&nbsp;<span style="color:#9cdcfe;">customer</span><span style="color:gainsboro;">)</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:#569cd6;">await</span>&nbsp;<span style="color:gainsboro;">_repo</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Put</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">customer</span><span style="color:gainsboro;">);</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
    <span style="color:gainsboro;">}</span>
    </pre>`;

    asdf: string = ` `;
    max: string = `<pre style="font-family:Consolas;font-size:13px;color:gainsboro;background:#1e1e1e;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">static</span>&nbsp;<span style="color:#569cd6;">int</span>&nbsp;<span style="color:#dcdcaa;">MaxLength</span>(<span style="color:#569cd6;">int</span>[]&nbsp;<span style="color:#9cdcfe;">arr</span>,&nbsp;<span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">n</span>)
    &nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;find&nbsp;the&nbsp;maximum&nbsp;consec&nbsp;elements&nbsp;that&nbsp;add&nbsp;up&nbsp;to&nbsp;less&nbsp;than&nbsp;or&nbsp;equal&nbsp;to&nbsp;n</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//int[]&nbsp;arr&nbsp;=&nbsp;{&nbsp;3,&nbsp;1,&nbsp;2,&nbsp;4,&nbsp;5,&nbsp;-66,&nbsp;0,&nbsp;1&nbsp;};</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;n&nbsp;=&nbsp;7</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;result&nbsp;=&nbsp;3&nbsp;(3+1+2)</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">left</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span>,&nbsp;<span style="color:#9cdcfe;">sum</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span>,&nbsp;<span style="color:#9cdcfe;">max</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span>;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">for</span>&nbsp;(<span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">i</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span>;&nbsp;i&nbsp;<span style="color:#b4b4b4;">&lt;</span>&nbsp;arr<span style="color:#b4b4b4;">.</span>Length;&nbsp;i<span style="color:#b4b4b4;">++</span>)
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sum&nbsp;<span style="color:#b4b4b4;">+=</span>&nbsp;arr[i];
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;(sum&nbsp;<span style="color:#b4b4b4;">&lt;=</span>&nbsp;n)
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;max<span style="color:#b4b4b4;">++</span>;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">else</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sum&nbsp;<span style="color:#b4b4b4;">-=</span>&nbsp;arr[left<span style="color:#b4b4b4;">++</span>];
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}


    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;max;
    &nbsp;&nbsp;&nbsp;&nbsp;}
    </pre>`;

    userHtmlSafe: SafeHtml;
    userHtml: string = `<pre style="font-family:Consolas;font-size:13px;color:#dadada;background:#1e1e1e;"><span style="color:gray;">&lt;</span><span style="color:#569cd6;">div</span>&nbsp;<span style="color:#9cdcfe;">class</span><span style="color:#b4b4b4;">=</span><span style="color:#c8c8c8;">&quot;wrapper&quot;</span><span style="color:gray;">&gt;</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gray;">&lt;</span><span style="color:#569cd6;">div</span>&nbsp;<span style="color:#9cdcfe;">class</span><span style="color:#b4b4b4;">=</span><span style="color:#c8c8c8;">&quot;wrapped-div&quot;</span><span style="color:gray;">&gt;</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gray;">&lt;</span><span style="color:#569cd6;">div</span>&nbsp;<span style="color:#9cdcfe;">class</span><span style="color:#b4b4b4;">=</span><span style="color:#c8c8c8;">&quot;tab-header&quot;</span><span style="color:gray;">&gt;</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gray;">&lt;</span><span style="color:#569cd6;">h2</span>&nbsp;<span style="color:#9cdcfe;">routerLink</span><span style="color:#b4b4b4;">=</span><span style="color:#c8c8c8;">&#39;/user/login&#39;</span>&nbsp;<span style="color:#9cdcfe;">routerLinkActive</span><span style="color:#b4b4b4;">=</span><span style="color:#c8c8c8;">&#39;active&#39;</span><span style="color:gray;">&gt;</span>Login<span style="color:gray;">&lt;/</span><span style="color:#569cd6;">h2</span><span style="color:gray;">&gt;</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gray;">&lt;</span><span style="color:#569cd6;">h2</span>&nbsp;<span style="color:#9cdcfe;">routerLink</span><span style="color:#b4b4b4;">=</span><span style="color:#c8c8c8;">&#39;/user/register&#39;</span>&nbsp;<span style="color:#9cdcfe;">routerLinkActive</span><span style="color:#b4b4b4;">=</span><span style="color:#c8c8c8;">&#39;active&#39;</span><span style="color:gray;">&gt;</span>Register<span style="color:gray;">&lt;/</span><span style="color:#569cd6;">h2</span><span style="color:gray;">&gt;</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gray;">&lt;/</span><span style="color:#569cd6;">div</span><span style="color:gray;">&gt;</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gray;">&lt;</span><span style="color:#569cd6;">div</span>&nbsp;<span style="color:#9cdcfe;">class</span><span style="color:#b4b4b4;">=</span><span style="color:#c8c8c8;">&quot;row&quot;</span><span style="color:gray;">&gt;</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gray;">&lt;</span><span style="color:#569cd6;">div</span>&nbsp;<span style="color:#9cdcfe;">class</span><span style="color:#b4b4b4;">=</span><span style="color:#c8c8c8;">&quot;col-md-10&nbsp;offset-md-1&quot;</span><span style="color:gray;">&gt;</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gray;">&lt;</span><span style="color:#569cd6;">router-outlet</span><span style="color:gray;">&gt;&lt;/</span><span style="color:#569cd6;">router-outlet</span><span style="color:gray;">&gt;</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gray;">&lt;/</span><span style="color:#569cd6;">div</span><span style="color:gray;">&gt;</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gray;">&lt;/</span><span style="color:#569cd6;">div</span><span style="color:gray;">&gt;</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gray;">&lt;/</span><span style="color:#569cd6;">div</span><span style="color:gray;">&gt;</span>
    <span style="color:gray;">&lt;/</span><span style="color:#569cd6;">div</span><span style="color:gray;">&gt;</span>
    </pre>`;

    loginHtmlSafe: SafeHtml;
    loginHtml: string = `<pre style="font-family:Consolas;font-size:13px;color:#dadada;background:#1e1e1e;"><span style="color:gray;">&lt;</span><span style="color:#569cd6;">img</span>&nbsp;<span style="color:#9cdcfe;">src</span><span style="color:#b4b4b4;">=</span><span style="color:#c8c8c8;">&quot;/assets/img/single_user.png&quot;</span>&nbsp;<span style="color:#9cdcfe;">class</span><span style="color:#b4b4b4;">=</span><span style="color:#c8c8c8;">&quot;mx-auto&nbsp;d-block&quot;</span><span style="color:gray;">&gt;</span>
    <span style="color:gray;">&lt;</span><span style="color:#569cd6;">form</span>&nbsp;<span style="color:#9cdcfe;">#form</span><span style="color:#b4b4b4;">=</span><span style="color:#c8c8c8;">&#39;ngForm&#39;</span>&nbsp;<span style="color:#9cdcfe;">class</span><span style="color:#b4b4b4;">=</span><span style="color:#c8c8c8;">&quot;mb-4&quot;</span>&nbsp;<span style="color:#9cdcfe;">autocomplete</span><span style="color:#b4b4b4;">=</span><span style="color:#c8c8c8;">&quot;off&quot;</span>&nbsp;<span style="color:#9cdcfe;">(submit)</span><span style="color:#b4b4b4;">=</span><span style="color:#c8c8c8;">&quot;onSubmit(form)&quot;</span><span style="color:gray;">&gt;</span>
    &nbsp;&nbsp;<span style="color:gray;">&lt;</span><span style="color:#569cd6;">div</span>&nbsp;<span style="color:#9cdcfe;">class</span><span style="color:#b4b4b4;">=</span><span style="color:#c8c8c8;">&quot;form-group&nbsp;&nbsp;mb-2&quot;</span><span style="color:gray;">&gt;</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gray;">&lt;</span><span style="color:#569cd6;">label</span><span style="color:gray;">&gt;</span>Username<span style="color:gray;">&lt;/</span><span style="color:#569cd6;">label</span><span style="color:gray;">&gt;</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gray;">&lt;</span><span style="color:#569cd6;">input</span>&nbsp;<span style="color:#9cdcfe;">class</span><span style="color:#b4b4b4;">=</span><span style="color:#c8c8c8;">&quot;form-control&quot;</span>&nbsp;<span style="color:#9cdcfe;">#UserName</span><span style="color:#b4b4b4;">=</span><span style="color:#c8c8c8;">&quot;ngModel&quot;</span>&nbsp;<span style="color:#9cdcfe;">id</span><span style="color:#b4b4b4;">=</span><span style="color:#c8c8c8;">&quot;UserName&quot;</span>&nbsp;<span style="color:#9cdcfe;">name</span><span style="color:#b4b4b4;">=</span><span style="color:#c8c8c8;">&quot;UserName&quot;</span>&nbsp;<span style="color:#9cdcfe;">[(ngModel)]</span><span style="color:#b4b4b4;">=</span><span style="color:#c8c8c8;">&quot;formModel.UserName&quot;</span>&nbsp;<span style="color:#9cdcfe;">required</span>&nbsp;<span style="color:#9cdcfe;">value</span><span style="color:#b4b4b4;">=</span><span style="color:#c8c8c8;">&quot;service.testUser&quot;</span><span style="color:gray;">&gt;</span>
    &nbsp;&nbsp;<span style="color:gray;">&lt;/</span><span style="color:#569cd6;">div</span><span style="color:gray;">&gt;</span>
    &nbsp;&nbsp;<span style="color:gray;">&lt;</span><span style="color:#569cd6;">div</span>&nbsp;<span style="color:#9cdcfe;">class</span><span style="color:#b4b4b4;">=</span><span style="color:#c8c8c8;">&quot;form-group&nbsp;&nbsp;mb-2&quot;</span><span style="color:gray;">&gt;</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gray;">&lt;</span><span style="color:#569cd6;">label</span><span style="color:gray;">&gt;</span>Password<span style="color:gray;">&lt;/</span><span style="color:#569cd6;">label</span><span style="color:gray;">&gt;</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gray;">&lt;</span><span style="color:#569cd6;">input</span>&nbsp;<span style="color:#9cdcfe;">type</span><span style="color:#b4b4b4;">=</span><span style="color:#c8c8c8;">&quot;password&quot;</span>&nbsp;<span style="color:#9cdcfe;">class</span><span style="color:#b4b4b4;">=</span><span style="color:#c8c8c8;">&quot;form-control&quot;</span>&nbsp;<span style="color:#9cdcfe;">#Password</span><span style="color:#b4b4b4;">=</span><span style="color:#c8c8c8;">&quot;ngModel&quot;</span>&nbsp;<span style="color:#9cdcfe;">name</span><span style="color:#b4b4b4;">=</span><span style="color:#c8c8c8;">&quot;Password&quot;</span>&nbsp;<span style="color:#9cdcfe;">[(ngModel)]</span><span style="color:#b4b4b4;">=</span><span style="color:#c8c8c8;">&quot;formModel.Password&quot;</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">required</span>&nbsp;<span style="color:#9cdcfe;">value</span><span style="color:#b4b4b4;">=</span><span style="color:#c8c8c8;">&quot;</span><span style="font-weight:bold;color:gainsboro;">{{</span><span style="color:magenta;">formModel.Password</span><span style="font-weight:bold;color:gainsboro;">}}</span><span style="color:#c8c8c8;">&quot;</span><span style="color:gray;">&gt;</span>
    &nbsp;&nbsp;<span style="color:gray;">&lt;/</span><span style="color:#569cd6;">div</span><span style="color:gray;">&gt;</span>
    &nbsp;&nbsp;<span style="color:gray;">&lt;</span><span style="color:#569cd6;">div</span>&nbsp;<span style="color:#9cdcfe;">class</span><span style="color:#b4b4b4;">=</span><span style="color:#c8c8c8;">&quot;form-row&nbsp;&nbsp;mb-2&quot;</span><span style="color:gray;">&gt;</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gray;">&lt;</span><span style="color:#569cd6;">div</span>&nbsp;<span style="color:#9cdcfe;">class</span><span style="color:#b4b4b4;">=</span><span style="color:#c8c8c8;">&quot;form-group&nbsp;col-md-8&nbsp;offset-md-2&quot;</span><span style="color:gray;">&gt;</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gray;">&lt;</span><span style="color:#569cd6;">button</span>&nbsp;<span style="color:#9cdcfe;">type</span><span style="color:#b4b4b4;">=</span><span style="color:#c8c8c8;">&quot;submit&quot;</span>&nbsp;<span style="color:#9cdcfe;">class</span><span style="color:#b4b4b4;">=</span><span style="color:#c8c8c8;">&quot;btn&nbsp;btn-lg&nbsp;w-100&quot;</span>&nbsp;<span style="color:#9cdcfe;">[disabled]</span><span style="color:#b4b4b4;">=</span><span style="color:#c8c8c8;">&quot;form.invalid&quot;</span><span style="color:gray;">&gt;</span>Login<span style="color:gray;">&lt;/</span><span style="color:#569cd6;">button</span><span style="color:gray;">&gt;</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gray;">&lt;/</span><span style="color:#569cd6;">div</span><span style="color:gray;">&gt;</span>
    &nbsp;&nbsp;<span style="color:gray;">&lt;/</span><span style="color:#569cd6;">div</span><span style="color:gray;">&gt;</span>
    &nbsp;&nbsp;<span style="color:gray;">&lt;</span><span style="color:#569cd6;">div</span>&nbsp;<span style="color:#9cdcfe;">class</span><span style="color:#b4b4b4;">=</span><span style="color:#c8c8c8;">&quot;div-center&quot;</span><span style="color:gray;">&gt;</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gray;">&lt;</span><span style="color:#569cd6;">a</span>&nbsp;<span style="color:#9cdcfe;">class</span><span style="color:#b4b4b4;">=</span><span style="color:#c8c8c8;">&quot;forgot-password&quot;</span>&nbsp;<span style="color:#9cdcfe;">routerLink</span><span style="color:#b4b4b4;">=</span><span style="color:#c8c8c8;">&quot;/resetpassword&quot;</span>&nbsp;<span style="color:#9cdcfe;">routerLinkActive</span><span style="color:#b4b4b4;">=</span><span style="color:#c8c8c8;">&quot;active&quot;</span><span style="color:gray;">&gt;</span>Forgot&nbsp;Password?<span style="color:gray;">&lt;/</span><span style="color:#569cd6;">a</span><span style="color:gray;">&gt;</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gray;">&lt;/</span><span style="color:#569cd6;">div</span><span style="color:gray;">&gt;</span>
    <span style="color:gray;">&lt;/</span><span style="color:#569cd6;">form</span><span style="color:gray;">&gt;</span>
    </pre>`;

    loginTsSafe: SafeHtml;
    loginTs: string = `<pre style="font-family:Consolas;font-size:13px;color:#dadada;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;import</span>&nbsp;<span style="color:gainsboro;">{</span>&nbsp;<span style="color:gainsboro;">Component</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:gainsboro;">OnInit</span>&nbsp;<span style="color:gainsboro;">}</span>&nbsp;<span style="color:#569cd6;">from</span>&nbsp;<span style="color:#d69d85;">&#39;@angular/core&#39;</span><span style="color:gainsboro;">;</span>
    <span style="color:#569cd6;">import</span>&nbsp;<span style="color:gainsboro;">{</span>&nbsp;<span style="color:gainsboro;">UserService</span>&nbsp;<span style="color:gainsboro;">}</span>&nbsp;<span style="color:#569cd6;">from</span>&nbsp;<span style="color:#d69d85;">&#39;../shared/user.service&#39;</span><span style="color:gainsboro;">;</span>
    <span style="color:#569cd6;">import</span>&nbsp;<span style="color:gainsboro;">{</span>&nbsp;<span style="color:gainsboro;">ToastrService</span>&nbsp;<span style="color:gainsboro;">}</span>&nbsp;<span style="color:#569cd6;">from</span>&nbsp;<span style="color:#d69d85;">&#39;ngx-toastr&#39;</span><span style="color:gainsboro;">;</span>
    <span style="color:#569cd6;">import</span>&nbsp;<span style="color:gainsboro;">{</span>&nbsp;<span style="color:gainsboro;">Router</span>&nbsp;<span style="color:gainsboro;">}</span>&nbsp;<span style="color:#569cd6;">from</span>&nbsp;<span style="color:#d69d85;">&#39;@angular/router&#39;</span><span style="color:gainsboro;">;</span>
    <span style="color:#569cd6;">import</span>&nbsp;<span style="color:gainsboro;">{</span>&nbsp;<span style="color:gainsboro;">NgForm</span>&nbsp;<span style="color:gainsboro;">}</span>&nbsp;<span style="color:#569cd6;">from</span>&nbsp;<span style="color:#d69d85;">&#39;@angular/forms&#39;</span><span style="color:gainsboro;">;</span>

    <span style="color:gainsboro;">@</span><span style="color:gainsboro;">Component</span><span style="color:gainsboro;">({</span>
    &nbsp;&nbsp;<span style="color:gainsboro;">selector</span><span style="color:gainsboro;">:</span>&nbsp;<span style="color:#d69d85;">&#39;app-login&#39;</span><span style="color:gainsboro;">,</span>
    &nbsp;&nbsp;<span style="color:gainsboro;">templateUrl</span><span style="color:gainsboro;">:</span>&nbsp;<span style="color:#d69d85;">&#39;./login.component.html&#39;</span><span style="color:gainsboro;">,</span>
    &nbsp;&nbsp;<span style="color:gainsboro;">styles</span><span style="color:gainsboro;">:</span>&nbsp;<span style="color:gainsboro;">[]</span>
    <span style="color:gainsboro;">})</span>
    <span style="color:#569cd6;">export</span>&nbsp;<span style="color:#569cd6;">class</span>&nbsp;<span style="color:#4ec9b0;">LoginComponent</span>&nbsp;<span style="color:#569cd6;">implements</span>&nbsp;<span style="color:gainsboro;">OnInit</span>&nbsp;<span style="color:gainsboro;">{</span>

    &nbsp;&nbsp;<span style="color:#569cd6;">constructor</span><span style="color:gainsboro;">(</span><span style="color:#569cd6;">public</span>&nbsp;<span style="color:#9cdcfe;">service</span><span style="color:gainsboro;">:</span>&nbsp;<span style="color:gainsboro;">UserService</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:#569cd6;">private</span>&nbsp;<span style="color:#9cdcfe;">router</span><span style="color:gainsboro;">:</span>&nbsp;<span style="color:gainsboro;">Router</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:#569cd6;">private</span>&nbsp;<span style="color:#9cdcfe;">toastr</span><span style="color:gainsboro;">:</span>&nbsp;<span style="color:gainsboro;">ToastrService</span><span style="color:gainsboro;">)</span>&nbsp;<span style="color:gainsboro;">{</span>&nbsp;<span style="color:gainsboro;">}</span>

    &nbsp;&nbsp;<span style="color:gainsboro;">formModel</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">UserName</span><span style="color:gainsboro;">:</span>&nbsp;<span style="color:#d69d85;">&#39;&#39;</span><span style="color:gainsboro;">,</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">Password</span><span style="color:gainsboro;">:</span>&nbsp;<span style="color:#d69d85;">&#39;&#39;</span>
    &nbsp;&nbsp;<span style="color:gainsboro;">}</span>
    &nbsp;&nbsp;<span style="color:gainsboro;">ngOnInit</span><span style="color:gainsboro;">()</span>&nbsp;<span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">if</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:gainsboro;">localStorage</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">getItem</span><span style="color:gainsboro;">(</span><span style="color:#d69d85;">&#39;token&#39;</span><span style="color:gainsboro;">)</span>&nbsp;<span style="color:#b4b4b4;">==</span>&nbsp;<span style="color:#569cd6;">null</span><span style="color:gainsboro;">)</span>&nbsp;<span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">this</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">service</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">loggedIn</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">false</span><span style="color:gainsboro;">;</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">this</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">router</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">navigateByUrl</span><span style="color:gainsboro;">(</span><span style="color:#d69d85;">&#39;/home&#39;</span><span style="color:gainsboro;">);</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
    &nbsp;&nbsp;<span style="color:gainsboro;">}</span>

    &nbsp;&nbsp;<span style="color:gainsboro;">onSubmit</span><span style="color:gainsboro;">(</span><span style="color:#9cdcfe;">form</span><span style="color:gainsboro;">:</span>&nbsp;<span style="color:gainsboro;">NgForm</span><span style="color:gainsboro;">)</span>&nbsp;<span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">this</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">service</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">login</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">form</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">value</span><span style="color:gainsboro;">).</span><span style="color:gainsboro;">subscribe</span><span style="color:gainsboro;">(</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">(</span><span style="color:#9cdcfe;">res</span><span style="color:gainsboro;">:</span>&nbsp;<span style="color:#569cd6;">any</span><span style="color:gainsboro;">)</span>&nbsp;<span style="color:gainsboro;">=&gt;</span>&nbsp;<span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">localStorage</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">setItem</span><span style="color:gainsboro;">(</span><span style="color:#d69d85;">&#39;token&#39;</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:gainsboro;">res</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">token</span><span style="color:gainsboro;">);</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">this</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">router</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">navigateByUrl</span><span style="color:gainsboro;">(</span><span style="color:#d69d85;">&#39;/home&#39;</span><span style="color:gainsboro;">);</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">this</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">service</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">loggedIn</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">true</span><span style="color:gainsboro;">;</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">},</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">err</span>&nbsp;<span style="color:gainsboro;">=&gt;</span>&nbsp;<span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">if</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:gainsboro;">err</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">status</span>&nbsp;<span style="color:#b4b4b4;">==</span>&nbsp;<span style="color:#b5cea8;">400</span><span style="color:gainsboro;">)</span>&nbsp;<span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">this</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">toastr</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">error</span><span style="color:gainsboro;">(</span><span style="color:#d69d85;">&#39;Incorrect&nbsp;Username&nbsp;or&nbsp;Password&#39;</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:#d69d85;">&#39;Authentication&nbsp;Failed&#39;</span><span style="color:gainsboro;">);</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">else</span>&nbsp;<span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">console</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">log</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">err</span><span style="color:gainsboro;">);</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">);</span>
    &nbsp;&nbsp;<span style="color:gainsboro;">}</span>
    <span style="color:gainsboro;">}</span>
    </pre>`;

    registerTsSafe: SafeHtml;
    registerTs: string = `<pre style="font-family:Consolas;font-size:13px;color:#dadada;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;import</span>&nbsp;<span style="color:gainsboro;">{</span>&nbsp;<span style="color:gainsboro;">Component</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:gainsboro;">OnInit</span>&nbsp;<span style="color:gainsboro;">}</span>&nbsp;<span style="color:#569cd6;">from</span>&nbsp;<span style="color:#d69d85;">&#39;@angular/core&#39;</span><span style="color:gainsboro;">;</span>
    <span style="color:#569cd6;">import</span>&nbsp;<span style="color:gainsboro;">{</span>&nbsp;<span style="color:gainsboro;">UserService</span>&nbsp;<span style="color:gainsboro;">}</span>&nbsp;<span style="color:#569cd6;">from</span>&nbsp;<span style="color:#d69d85;">&#39;../shared/user.service&#39;</span><span style="color:gainsboro;">;</span>
    <span style="color:#569cd6;">import</span>&nbsp;<span style="color:gainsboro;">{</span>&nbsp;<span style="color:gainsboro;">ToastrService</span>&nbsp;<span style="color:gainsboro;">}</span>&nbsp;<span style="color:#569cd6;">from</span>&nbsp;<span style="color:#d69d85;">&#39;ngx-toastr&#39;</span><span style="color:gainsboro;">;</span>

    <span style="color:gainsboro;">@</span><span style="color:gainsboro;">Component</span><span style="color:gainsboro;">({</span>
    &nbsp;&nbsp;<span style="color:gainsboro;">selector</span><span style="color:gainsboro;">:</span>&nbsp;<span style="color:#d69d85;">&#39;app-register&#39;</span><span style="color:gainsboro;">,</span>
    &nbsp;&nbsp;<span style="color:gainsboro;">templateUrl</span><span style="color:gainsboro;">:</span>&nbsp;<span style="color:#d69d85;">&#39;./register.component.html&#39;</span><span style="color:gainsboro;">,</span>
    &nbsp;&nbsp;<span style="color:gainsboro;">styles</span><span style="color:gainsboro;">:</span>&nbsp;<span style="color:gainsboro;">[]</span>
    <span style="color:gainsboro;">})</span>
    <span style="color:#569cd6;">export</span>&nbsp;<span style="color:#569cd6;">class</span>&nbsp;<span style="color:#4ec9b0;">RegisterComponent</span>&nbsp;<span style="color:#569cd6;">implements</span>&nbsp;<span style="color:gainsboro;">OnInit</span>&nbsp;<span style="color:gainsboro;">{</span>

    &nbsp;&nbsp;<span style="color:#569cd6;">constructor</span><span style="color:gainsboro;">(</span><span style="color:#569cd6;">public</span>&nbsp;<span style="color:#9cdcfe;">service</span><span style="color:gainsboro;">:</span>&nbsp;<span style="color:gainsboro;">UserService</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:#569cd6;">private</span>&nbsp;<span style="color:#9cdcfe;">toastr</span><span style="color:gainsboro;">:</span>&nbsp;<span style="color:gainsboro;">ToastrService</span><span style="color:gainsboro;">)</span>&nbsp;<span style="color:gainsboro;">{</span>&nbsp;<span style="color:gainsboro;">}</span>

    &nbsp;&nbsp;<span style="color:gainsboro;">ngOnInit</span><span style="color:gainsboro;">()</span>&nbsp;<span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">this</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">service</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">formModel</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">reset</span><span style="color:gainsboro;">();</span>
    &nbsp;&nbsp;<span style="color:gainsboro;">}</span>

    &nbsp;&nbsp;<span style="color:gainsboro;">onSubmit</span><span style="color:gainsboro;">()</span>&nbsp;<span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">this</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">service</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">register</span><span style="color:gainsboro;">().</span><span style="color:gainsboro;">subscribe</span><span style="color:gainsboro;">(</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">(</span><span style="color:#9cdcfe;">res</span><span style="color:gainsboro;">:</span>&nbsp;<span style="color:#569cd6;">any</span><span style="color:gainsboro;">)</span>&nbsp;<span style="color:gainsboro;">=&gt;</span>&nbsp;<span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">if</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:gainsboro;">res</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">Succeeded</span><span style="color:gainsboro;">)</span>&nbsp;<span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">this</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">service</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">formModel</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">reset</span><span style="color:gainsboro;">();</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">this</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">toastr</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">success</span><span style="color:gainsboro;">(</span><span style="color:#d69d85;">&#39;New&nbsp;user&nbsp;created!&#39;</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:#d69d85;">&#39;Registration&nbsp;successful.&#39;</span><span style="color:gainsboro;">);</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>&nbsp;<span style="color:#569cd6;">else</span>&nbsp;<span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">res</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">errors</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">forEach</span><span style="color:gainsboro;">(</span><span style="color:#9cdcfe;">element</span>&nbsp;<span style="color:gainsboro;">=&gt;</span>&nbsp;<span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">switch</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:gainsboro;">element</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">code</span><span style="color:gainsboro;">)</span>&nbsp;<span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">case</span>&nbsp;<span style="color:#d69d85;">&#39;DuplicateUserName&#39;</span><span style="color:gainsboro;">:</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">this</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">toastr</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">error</span><span style="color:gainsboro;">(</span><span style="color:#d69d85;">&#39;Username&nbsp;is&nbsp;already&nbsp;taken&#39;</span><span style="color:gainsboro;">,</span><span style="color:#d69d85;">&#39;Registration&nbsp;failed.&#39;</span><span style="color:gainsboro;">);</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">break</span><span style="color:gainsboro;">;</span>

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">default</span><span style="color:gainsboro;">:</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">this</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">toastr</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">error</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">element</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">description</span><span style="color:gainsboro;">,</span><span style="color:#d69d85;">&#39;Registration&nbsp;failed.&#39;</span><span style="color:gainsboro;">);</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">break</span><span style="color:gainsboro;">;</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">});</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">},</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">err</span>&nbsp;<span style="color:gainsboro;">=&gt;</span>&nbsp;<span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">console</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">log</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">err</span><span style="color:gainsboro;">);</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">);</span>
    &nbsp;&nbsp;<span style="color:gainsboro;">}</span>
    <span style="color:gainsboro;">}</span>
    </pre>`;

    registerHtmlSafe: SafeHtml;
    registerHtml: string = `<pre style="font-family:Consolas;font-size:13px;color:#dadada;background:#1e1e1e;"><span style="color:gray;">&lt;</span><span style="color:#569cd6;">form</span>&nbsp;<span style="color:#9cdcfe;">[formGroup]</span><span style="color:#b4b4b4;">=</span><span style="color:#c8c8c8;">&quot;service.formModel&quot;</span>&nbsp;<span style="color:#9cdcfe;">autocomplete</span><span style="color:#b4b4b4;">=</span><span style="color:#c8c8c8;">&quot;off&quot;</span>&nbsp;<span style="color:#9cdcfe;">(submit)</span><span style="color:#b4b4b4;">=</span><span style="color:#c8c8c8;">&quot;onSubmit()&quot;</span><span style="color:gray;">&gt;</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gray;">&lt;</span><span style="color:#569cd6;">div</span>&nbsp;<span style="color:#9cdcfe;">class</span><span style="color:#b4b4b4;">=</span><span style="color:#c8c8c8;">&quot;form-group&nbsp;required&nbsp;mb-2&quot;</span><span style="color:gray;">&gt;</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gray;">&lt;</span><span style="color:#569cd6;">label</span><span style="color:gray;">&gt;</span>Username<span style="color:gray;">&lt;/</span><span style="color:#569cd6;">label</span><span style="color:gray;">&gt;</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gray;">&lt;</span><span style="color:#569cd6;">input</span>&nbsp;<span style="color:#9cdcfe;">class</span><span style="color:#b4b4b4;">=</span><span style="color:#c8c8c8;">&quot;form-control&quot;</span>&nbsp;<span style="color:#9cdcfe;">formControlName</span><span style="color:#b4b4b4;">=</span><span style="color:#c8c8c8;">&quot;UserName&quot;</span>&nbsp;<span style="color:#9cdcfe;">placeholder</span><span style="color:#b4b4b4;">=</span><span style="color:#c8c8c8;">&quot;Letters&nbsp;and&nbsp;digits&nbsp;only,&nbsp;no&nbsp;spaces&quot;</span><span style="color:gray;">&gt;</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gray;">&lt;</span><span style="color:#569cd6;">label</span>&nbsp;<span style="color:#9cdcfe;">class</span><span style="color:#b4b4b4;">=</span><span style="color:#c8c8c8;">&quot;text-danger&quot;</span>&nbsp;<span style="color:#9cdcfe;">*ngIf</span><span style="color:#b4b4b4;">=</span><span style="color:#c8c8c8;">&quot;service.formModel.get(&#39;UserName&#39;).touched&nbsp;&amp;&amp;&nbsp;service.formModel.get(&#39;UserName&#39;).errors?.required&quot;</span><span style="color:gray;">&gt;</span>Required&nbsp;field<span style="color:gray;">&lt;/</span><span style="color:#569cd6;">label</span><span style="color:gray;">&gt;</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gray;">&lt;/</span><span style="color:#569cd6;">div</span><span style="color:gray;">&gt;</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gray;">&lt;</span><span style="color:#569cd6;">div</span>&nbsp;<span style="color:#9cdcfe;">class</span><span style="color:#b4b4b4;">=</span><span style="color:#c8c8c8;">&quot;form-group&nbsp;mb-2&quot;</span><span style="color:gray;">&gt;</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gray;">&lt;</span><span style="color:#569cd6;">label</span><span style="color:gray;">&gt;</span>Email<span style="color:gray;">&lt;/</span><span style="color:#569cd6;">label</span><span style="color:gray;">&gt;</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gray;">&lt;</span><span style="color:#569cd6;">input</span>&nbsp;<span style="color:#9cdcfe;">class</span><span style="color:#b4b4b4;">=</span><span style="color:#c8c8c8;">&quot;form-control&quot;</span>&nbsp;<span style="color:#9cdcfe;">formControlName</span><span style="color:#b4b4b4;">=</span><span style="color:#c8c8c8;">&quot;Email&quot;</span>&nbsp;<span style="color:#9cdcfe;">placeholder</span><span style="color:#b4b4b4;">=</span><span style="color:#c8c8c8;">&quot;Enter&nbsp;a&nbsp;valid&nbsp;email&nbsp;address&quot;</span><span style="color:gray;">&gt;</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gray;">&lt;</span><span style="color:#569cd6;">label</span>&nbsp;<span style="color:#9cdcfe;">class</span><span style="color:#b4b4b4;">=</span><span style="color:#c8c8c8;">&quot;text-danger&quot;</span>&nbsp;<span style="color:#9cdcfe;">*ngIf</span><span style="color:#b4b4b4;">=</span><span style="color:#c8c8c8;">&quot;service.formModel.get(&#39;Email&#39;).touched&nbsp;&amp;&amp;&nbsp;service.formModel.get(&#39;Email&#39;).errors?.email&quot;</span><span style="color:gray;">&gt;</span>Invalid
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;email&nbsp;address.<span style="color:gray;">&lt;/</span><span style="color:#569cd6;">label</span><span style="color:gray;">&gt;</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gray;">&lt;/</span><span style="color:#569cd6;">div</span><span style="color:gray;">&gt;</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gray;">&lt;</span><span style="color:#569cd6;">div</span>&nbsp;<span style="color:#9cdcfe;">class</span><span style="color:#b4b4b4;">=</span><span style="color:#c8c8c8;">&quot;form-group&nbsp;mb-2&quot;</span><span style="color:gray;">&gt;</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gray;">&lt;</span><span style="color:#569cd6;">label</span><span style="color:gray;">&gt;</span>Full&nbsp;Name<span style="color:gray;">&lt;/</span><span style="color:#569cd6;">label</span><span style="color:gray;">&gt;</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gray;">&lt;</span><span style="color:#569cd6;">input</span>&nbsp;<span style="color:#9cdcfe;">class</span><span style="color:#b4b4b4;">=</span><span style="color:#c8c8c8;">&quot;form-control&quot;</span>&nbsp;<span style="color:#9cdcfe;">formControlName</span><span style="color:#b4b4b4;">=</span><span style="color:#c8c8c8;">&quot;FullName&quot;</span><span style="color:gray;">&gt;</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gray;">&lt;/</span><span style="color:#569cd6;">div</span><span style="color:gray;">&gt;</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gray;">&lt;</span><span style="color:#569cd6;">div</span>&nbsp;<span style="color:#9cdcfe;">formGroupName</span><span style="color:#b4b4b4;">=</span><span style="color:#c8c8c8;">&quot;Passwords&quot;</span><span style="color:gray;">&gt;</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gray;">&lt;</span><span style="color:#569cd6;">div</span>&nbsp;<span style="color:#9cdcfe;">class</span><span style="color:#b4b4b4;">=</span><span style="color:#c8c8c8;">&quot;form-group&nbsp;required&nbsp;mb-2&quot;</span><span style="color:gray;">&gt;</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gray;">&lt;</span><span style="color:#569cd6;">label</span><span style="color:gray;">&gt;</span>Password<span style="color:gray;">&lt;/</span><span style="color:#569cd6;">label</span><span style="color:gray;">&gt;</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gray;">&lt;</span><span style="color:#569cd6;">input</span>&nbsp;<span style="color:#9cdcfe;">type</span><span style="color:#b4b4b4;">=</span><span style="color:#c8c8c8;">&quot;password&quot;</span>&nbsp;<span style="color:#9cdcfe;">class</span><span style="color:#b4b4b4;">=</span><span style="color:#c8c8c8;">&quot;form-control&quot;</span>&nbsp;<span style="color:#9cdcfe;">formControlName</span><span style="color:#b4b4b4;">=</span><span style="color:#c8c8c8;">&quot;Password&quot;</span>&nbsp;<span style="color:#9cdcfe;">placeholder</span><span style="color:#b4b4b4;">=</span><span style="color:#c8c8c8;">&quot;Mininum&nbsp;4&nbsp;characters&quot;</span><span style="color:gray;">&gt;</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gray;">&lt;</span><span style="color:#569cd6;">label</span>&nbsp;<span style="color:#9cdcfe;">class</span><span style="color:#b4b4b4;">=</span><span style="color:#c8c8c8;">&quot;text-danger&quot;</span>&nbsp;<span style="color:#9cdcfe;">*ngIf</span><span style="color:#b4b4b4;">=</span><span style="color:#c8c8c8;">&quot;service.formModel.get(&#39;Passwords.Password&#39;).touched&nbsp;&amp;&amp;&nbsp;service.formModel.get(&#39;Passwords.Password&#39;).errors?.required&quot;</span><span style="color:gray;">&gt;</span>Required&nbsp;field<span style="color:gray;">&lt;/</span><span style="color:#569cd6;">label</span><span style="color:gray;">&gt;</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gray;">&lt;</span><span style="color:#569cd6;">label</span>&nbsp;<span style="color:#9cdcfe;">class</span><span style="color:#b4b4b4;">=</span><span style="color:#c8c8c8;">&quot;text-danger&quot;</span>&nbsp;<span style="color:#9cdcfe;">*ngIf</span><span style="color:#b4b4b4;">=</span><span style="color:#c8c8c8;">&quot;service.formModel.get(&#39;Passwords.Password&#39;).touched&nbsp;&amp;&amp;&nbsp;service.formModel.get(&#39;Passwords.Password&#39;).errors?.minlength&quot;</span><span style="color:gray;">&gt;</span>Minimum
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4&nbsp;characters&nbsp;required.<span style="color:gray;">&lt;/</span><span style="color:#569cd6;">label</span><span style="color:gray;">&gt;</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gray;">&lt;/</span><span style="color:#569cd6;">div</span><span style="color:gray;">&gt;</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gray;">&lt;</span><span style="color:#569cd6;">div</span>&nbsp;<span style="color:#9cdcfe;">class</span><span style="color:#b4b4b4;">=</span><span style="color:#c8c8c8;">&quot;form-group&nbsp;required&nbsp;mb-2&quot;</span><span style="color:gray;">&gt;</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gray;">&lt;</span><span style="color:#569cd6;">label</span><span style="color:gray;">&gt;</span>Confirm&nbsp;Password<span style="color:gray;">&lt;/</span><span style="color:#569cd6;">label</span><span style="color:gray;">&gt;</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gray;">&lt;</span><span style="color:#569cd6;">input</span>&nbsp;<span style="color:#9cdcfe;">type</span><span style="color:#b4b4b4;">=</span><span style="color:#c8c8c8;">&quot;password&quot;</span>&nbsp;<span style="color:#9cdcfe;">class</span><span style="color:#b4b4b4;">=</span><span style="color:#c8c8c8;">&quot;form-control&quot;</span>&nbsp;<span style="color:#9cdcfe;">formControlName</span><span style="color:#b4b4b4;">=</span><span style="color:#c8c8c8;">&quot;ConfirmPassword&quot;</span><span style="color:gray;">&gt;</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gray;">&lt;</span><span style="color:#569cd6;">label</span>&nbsp;<span style="color:#9cdcfe;">class</span><span style="color:#b4b4b4;">=</span><span style="color:#c8c8c8;">&quot;text-danger&quot;</span>&nbsp;<span style="color:#9cdcfe;">*ngIf</span><span style="color:#b4b4b4;">=</span><span style="color:#c8c8c8;">&quot;service.formModel.get(&#39;Passwords.ConfirmPassword&#39;).touched&nbsp;&amp;&amp;&nbsp;service.formModel.get(&#39;Passwords.ConfirmPassword&#39;).errors?.required&quot;</span><span style="color:gray;">&gt;</span>Required&nbsp;field<span style="color:gray;">&lt;/</span><span style="color:#569cd6;">label</span><span style="color:gray;">&gt;</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gray;">&lt;</span><span style="color:#569cd6;">label</span>&nbsp;<span style="color:#9cdcfe;">class</span><span style="color:#b4b4b4;">=</span><span style="color:#c8c8c8;">&quot;text-danger&quot;</span>&nbsp;<span style="color:#9cdcfe;">*ngIf</span><span style="color:#b4b4b4;">=</span><span style="color:#c8c8c8;">&quot;service.formModel.get(&#39;Passwords.ConfirmPassword&#39;).touched&nbsp;&amp;&amp;&nbsp;service.formModel.get(&#39;Passwords.ConfirmPassword&#39;).errors?.passwordMismatch&quot;</span><span style="color:gray;">&gt;</span>Confirm
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Password&nbsp;does&nbsp;not&nbsp;match.<span style="color:gray;">&lt;/</span><span style="color:#569cd6;">label</span><span style="color:gray;">&gt;</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gray;">&lt;/</span><span style="color:#569cd6;">div</span><span style="color:gray;">&gt;</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gray;">&lt;/</span><span style="color:#569cd6;">div</span><span style="color:gray;">&gt;</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gray;">&lt;</span><span style="color:#569cd6;">div</span>&nbsp;<span style="color:#9cdcfe;">class</span><span style="color:#b4b4b4;">=</span><span style="color:#c8c8c8;">&quot;form-row&nbsp;mb-2&quot;</span><span style="color:gray;">&gt;</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gray;">&lt;</span><span style="color:#569cd6;">div</span>&nbsp;<span style="color:#9cdcfe;">class</span><span style="color:#b4b4b4;">=</span><span style="color:#c8c8c8;">&quot;form-group&nbsp;col-md-8&nbsp;offset-md-2&quot;</span><span style="color:gray;">&gt;</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gray;">&lt;</span><span style="color:#569cd6;">button</span>&nbsp;<span style="color:#9cdcfe;">type</span><span style="color:#b4b4b4;">=</span><span style="color:#c8c8c8;">&quot;submit&quot;</span>&nbsp;<span style="color:#9cdcfe;">class</span><span style="color:#b4b4b4;">=</span><span style="color:#c8c8c8;">&quot;btn&nbsp;btn-lg&nbsp;btn-block&quot;</span>&nbsp;<span style="color:#9cdcfe;">[disabled]</span><span style="color:#b4b4b4;">=</span><span style="color:#c8c8c8;">&quot;!service.formModel.valid&quot;</span><span style="color:gray;">&gt;</span>Register<span style="color:gray;">&lt;/</span><span style="color:#569cd6;">button</span><span style="color:gray;">&gt;</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gray;">&lt;/</span><span style="color:#569cd6;">div</span><span style="color:gray;">&gt;</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gray;">&lt;/</span><span style="color:#569cd6;">div</span><span style="color:gray;">&gt;</span>
    &nbsp;&nbsp;<span style="color:gray;">&lt;/</span><span style="color:#569cd6;">form</span><span style="color:gray;">&gt;</span>
    </pre>`;

    userServiceTsSafe: SafeHtml;
    userServiceTs: string = `<pre style="font-family:Consolas;font-size:13px;color:#dadada;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;import</span>&nbsp;<span style="color:gainsboro;">{</span>&nbsp;<span style="color:gainsboro;">Injectable</span>&nbsp;<span style="color:gainsboro;">}</span>&nbsp;<span style="color:#569cd6;">from</span>&nbsp;<span style="color:#d69d85;">&#39;@angular/core&#39;</span><span style="color:gainsboro;">;</span>
    <span style="color:#569cd6;">import</span>&nbsp;<span style="color:gainsboro;">{</span>&nbsp;<span style="color:gainsboro;">FormBuilder</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:gainsboro;">Validators</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:gainsboro;">FormGroup</span>&nbsp;<span style="color:gainsboro;">}</span>&nbsp;<span style="color:#569cd6;">from</span>&nbsp;<span style="color:#d69d85;">&#39;@angular/forms&#39;</span><span style="color:gainsboro;">;</span>
    <span style="color:#569cd6;">import</span>&nbsp;<span style="color:gainsboro;">{</span>&nbsp;<span style="color:gainsboro;">HttpClient</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:gainsboro;">HttpHeaders</span>&nbsp;<span style="color:gainsboro;">}</span>&nbsp;<span style="color:#569cd6;">from</span>&nbsp;<span style="color:#d69d85;">&#39;@angular/common/http&#39;</span><span style="color:gainsboro;">;</span>
    <span style="color:#569cd6;">import</span>&nbsp;<span style="color:gainsboro;">{</span>&nbsp;<span style="color:gainsboro;">environment</span>&nbsp;<span style="color:gainsboro;">}</span>&nbsp;<span style="color:#569cd6;">from</span>&nbsp;<span style="color:#d69d85;">&#39;../../../environments/environment&#39;</span><span style="color:gainsboro;">;</span>

    <span style="color:gainsboro;">@</span><span style="color:gainsboro;">Injectable</span><span style="color:gainsboro;">({</span>
    &nbsp;&nbsp;<span style="color:gainsboro;">providedIn</span><span style="color:gainsboro;">:</span>&nbsp;<span style="color:#d69d85;">&#39;root&#39;</span>
    <span style="color:gainsboro;">})</span>
    <span style="color:#569cd6;">export</span>&nbsp;<span style="color:#569cd6;">class</span>&nbsp;<span style="color:#4ec9b0;">UserService</span>&nbsp;<span style="color:gainsboro;">{</span>

    &nbsp;&nbsp;<span style="color:#569cd6;">constructor</span><span style="color:gainsboro;">(</span><span style="color:#569cd6;">private</span>&nbsp;<span style="color:#9cdcfe;">fb</span><span style="color:gainsboro;">:</span>&nbsp;<span style="color:gainsboro;">FormBuilder</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:#569cd6;">private</span>&nbsp;<span style="color:#9cdcfe;">http</span><span style="color:gainsboro;">:</span>&nbsp;<span style="color:gainsboro;">HttpClient</span><span style="color:gainsboro;">)</span>&nbsp;<span style="color:gainsboro;">{</span>&nbsp;<span style="color:gainsboro;">}</span>

    &nbsp;&nbsp;<span style="color:gainsboro;">baseUri</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">environment</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">production</span>&nbsp;<span style="color:#b4b4b4;">?</span>&nbsp;<span style="color:#d69d85;">&quot;https://production_url/api/&quot;</span>&nbsp;<span style="color:#b4b4b4;">:</span>&nbsp;<span style="color:#d69d85;">&quot;https://localhost:xxxxx/api/&quot;</span><span style="color:gainsboro;">;</span>
    &nbsp;&nbsp;<span style="color:gainsboro;">loggedIn</span><span style="color:gainsboro;">:</span>&nbsp;<span style="color:#569cd6;">boolean</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">false</span><span style="color:gainsboro;">;</span>

    &nbsp;&nbsp;<span style="color:gainsboro;">formModel</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">this</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">fb</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">group</span><span style="color:gainsboro;">({</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">UserName</span><span style="color:gainsboro;">:</span>&nbsp;<span style="color:gainsboro;">[</span><span style="color:#d69d85;">&#39;&#39;</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:gainsboro;">Validators</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">required</span><span style="color:gainsboro;">],</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">FullName</span><span style="color:gainsboro;">:</span>&nbsp;<span style="color:gainsboro;">[</span><span style="color:#d69d85;">&#39;&#39;</span><span style="color:gainsboro;">],</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">Email</span><span style="color:gainsboro;">:</span>&nbsp;<span style="color:gainsboro;">[</span><span style="color:#d69d85;">&#39;&#39;</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:gainsboro;">Validators</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">email</span><span style="color:gainsboro;">],</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">Passwords</span><span style="color:gainsboro;">:</span>&nbsp;<span style="color:#569cd6;">this</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">fb</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">group</span><span style="color:gainsboro;">({</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">Password</span><span style="color:gainsboro;">:</span>&nbsp;<span style="color:gainsboro;">[</span><span style="color:#d69d85;">&#39;&#39;</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:gainsboro;">[</span><span style="color:gainsboro;">Validators</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">required</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:gainsboro;">Validators</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">minLength</span><span style="color:gainsboro;">(</span><span style="color:#b5cea8;">4</span><span style="color:gainsboro;">)]],</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">ConfirmPassword</span><span style="color:gainsboro;">:</span>&nbsp;<span style="color:gainsboro;">[</span><span style="color:#d69d85;">&#39;&#39;</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:gainsboro;">Validators</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">required</span><span style="color:gainsboro;">]</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">},</span>&nbsp;<span style="color:gainsboro;">{</span>&nbsp;<span style="color:gainsboro;">validator</span><span style="color:gainsboro;">:</span>&nbsp;<span style="color:#569cd6;">this</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">comparePasswords</span>&nbsp;<span style="color:gainsboro;">})</span>
    &nbsp;&nbsp;<span style="color:gainsboro;">});</span>

    &nbsp;&nbsp;<span style="color:gainsboro;">comparePasswords</span><span style="color:gainsboro;">(</span><span style="color:#9cdcfe;">fb</span><span style="color:gainsboro;">:</span>&nbsp;<span style="color:gainsboro;">FormGroup</span><span style="color:gainsboro;">)</span>&nbsp;<span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">let</span>&nbsp;<span style="color:gainsboro;">confirmPswrdCtrl</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">fb</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">get</span><span style="color:gainsboro;">(</span><span style="color:#d69d85;">&#39;ConfirmPassword&#39;</span><span style="color:gainsboro;">);</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">if</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:gainsboro;">confirmPswrdCtrl</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">errors</span>&nbsp;<span style="color:#b4b4b4;">==</span>&nbsp;<span style="color:#569cd6;">null</span>&nbsp;<span style="color:#b4b4b4;">||</span>&nbsp;<span style="color:#d69d85;">&#39;passwordMismatch&#39;</span>&nbsp;<span style="color:#569cd6;">in</span>&nbsp;<span style="color:gainsboro;">confirmPswrdCtrl</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">errors</span><span style="color:gainsboro;">)</span>&nbsp;<span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">if</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:gainsboro;">fb</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">get</span><span style="color:gainsboro;">(</span><span style="color:#d69d85;">&#39;Password&#39;</span><span style="color:gainsboro;">).</span><span style="color:gainsboro;">value</span>&nbsp;<span style="color:#b4b4b4;">!=</span>&nbsp;<span style="color:gainsboro;">confirmPswrdCtrl</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">value</span><span style="color:gainsboro;">)</span>&nbsp;<span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">confirmPswrdCtrl</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">setErrors</span><span style="color:gainsboro;">({</span>&nbsp;<span style="color:gainsboro;">passwordMismatch</span><span style="color:gainsboro;">:</span>&nbsp;<span style="color:#569cd6;">true</span>&nbsp;<span style="color:gainsboro;">});</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">else</span>&nbsp;<span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">confirmPswrdCtrl</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">setErrors</span><span style="color:gainsboro;">(</span><span style="color:#569cd6;">null</span><span style="color:gainsboro;">);</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
    &nbsp;&nbsp;<span style="color:gainsboro;">}</span>

    &nbsp;&nbsp;<span style="color:gainsboro;">register</span><span style="color:gainsboro;">()</span>&nbsp;<span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">var</span>&nbsp;<span style="color:gainsboro;">body</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">UserName</span><span style="color:gainsboro;">:</span>&nbsp;<span style="color:#569cd6;">this</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">formModel</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">value</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">UserName</span><span style="color:gainsboro;">,</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">Email</span><span style="color:gainsboro;">:</span>&nbsp;<span style="color:#569cd6;">this</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">formModel</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">value</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">Email</span><span style="color:gainsboro;">,</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">FullName</span><span style="color:gainsboro;">:</span>&nbsp;<span style="color:#569cd6;">this</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">formModel</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">value</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">FullName</span><span style="color:gainsboro;">,</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">Password</span><span style="color:gainsboro;">:</span>&nbsp;<span style="color:#569cd6;">this</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">formModel</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">value</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">Passwords</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">Password</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">};</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">return</span>&nbsp;<span style="color:#569cd6;">this</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">http</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">post</span><span style="color:gainsboro;">(</span><span style="color:#569cd6;">this</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">baseUri</span>&nbsp;<span style="color:#b4b4b4;">+</span>&nbsp;<span style="color:#d69d85;">&#39;applicationuser/register&#39;</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:gainsboro;">body</span><span style="color:gainsboro;">);</span>
    &nbsp;&nbsp;<span style="color:gainsboro;">}</span>

    &nbsp;&nbsp;<span style="color:gainsboro;">login</span><span style="color:gainsboro;">(</span><span style="color:#9cdcfe;">formData</span><span style="color:gainsboro;">)</span>&nbsp;<span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">return</span>&nbsp;<span style="color:#569cd6;">this</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">http</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">post</span><span style="color:gainsboro;">(</span><span style="color:#569cd6;">this</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">baseUri</span>&nbsp;<span style="color:#b4b4b4;">+</span>&nbsp;<span style="color:#d69d85;">&#39;applicationuser/login&#39;</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:gainsboro;">formData</span><span style="color:gainsboro;">);</span>
    &nbsp;&nbsp;<span style="color:gainsboro;">}</span>

    &nbsp;&nbsp;<span style="color:gainsboro;">getUserProfile</span><span style="color:gainsboro;">()</span>&nbsp;<span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">return</span>&nbsp;<span style="color:#569cd6;">this</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">http</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">get</span><span style="color:gainsboro;">(</span><span style="color:#569cd6;">this</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">baseUri</span>&nbsp;<span style="color:#b4b4b4;">+</span>&nbsp;<span style="color:#d69d85;">&#39;UserProfile&#39;</span><span style="color:gainsboro;">);</span>
    &nbsp;&nbsp;<span style="color:gainsboro;">}</span>

    &nbsp;&nbsp;<span style="color:gainsboro;">roleMatch</span><span style="color:gainsboro;">(</span><span style="color:#9cdcfe;">allowedRoles</span><span style="color:gainsboro;">):</span>&nbsp;<span style="color:#569cd6;">boolean</span>&nbsp;<span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">var</span>&nbsp;<span style="color:gainsboro;">isMatch</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">false</span><span style="color:gainsboro;">;</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">var</span>&nbsp;<span style="color:gainsboro;">payLoad</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">JSON</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">parse</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">window</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">atob</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">localStorage</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">getItem</span><span style="color:gainsboro;">(</span><span style="color:#d69d85;">&#39;token&#39;</span><span style="color:gainsboro;">).</span><span style="color:gainsboro;">split</span><span style="color:gainsboro;">(</span><span style="color:#d69d85;">&#39;.&#39;</span><span style="color:gainsboro;">)[</span><span style="color:#b5cea8;">1</span><span style="color:gainsboro;">]));</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">var</span>&nbsp;<span style="color:gainsboro;">userRole</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">payLoad</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">role</span><span style="color:gainsboro;">;</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">allowedRoles</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">forEach</span><span style="color:gainsboro;">(</span><span style="color:#9cdcfe;">element</span>&nbsp;<span style="color:gainsboro;">=&gt;</span>&nbsp;<span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">if</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:gainsboro;">userRole</span>&nbsp;<span style="color:#b4b4b4;">==</span>&nbsp;<span style="color:gainsboro;">element</span><span style="color:gainsboro;">)</span>&nbsp;<span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">isMatch</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">true</span><span style="color:gainsboro;">;</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">return</span>&nbsp;<span style="color:#569cd6;">false</span><span style="color:gainsboro;">;</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">return</span>&nbsp;<span style="color:#569cd6;">false</span><span style="color:gainsboro;">;</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">});</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">return</span>&nbsp;<span style="color:gainsboro;">isMatch</span><span style="color:gainsboro;">;</span>
    &nbsp;&nbsp;<span style="color:gainsboro;">}</span>

    &nbsp;&nbsp;<span style="color:gainsboro;">userIsAuthenticated</span><span style="color:gainsboro;">()</span>&nbsp;<span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">return</span>&nbsp;<span style="color:#569cd6;">this</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">http</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">get</span><span style="color:gainsboro;">(</span><span style="color:#569cd6;">this</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">baseUri</span>&nbsp;<span style="color:#b4b4b4;">+</span>&nbsp;<span style="color:#d69d85;">&#39;UserProfile/IsAuthenticated&#39;</span><span style="color:gainsboro;">);</span>
    &nbsp;&nbsp;<span style="color:gainsboro;">}</span>

    &nbsp;&nbsp;<span style="color:gainsboro;">resetPassword</span><span style="color:gainsboro;">(</span><span style="color:#9cdcfe;">email</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:#9cdcfe;">password</span><span style="color:gainsboro;">)</span>&nbsp;<span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">const</span>&nbsp;<span style="color:gainsboro;">body</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">Email</span><span style="color:gainsboro;">:</span>&nbsp;<span style="color:gainsboro;">email</span><span style="color:gainsboro;">,</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">Password</span><span style="color:gainsboro;">:</span>&nbsp;<span style="color:gainsboro;">password</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">var</span>&nbsp;<span style="color:gainsboro;">requestHeader</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">new</span>&nbsp;<span style="color:gainsboro;">HttpHeaders</span><span style="color:gainsboro;">({</span>&nbsp;<span style="color:#d69d85;">&#39;No-Auth&#39;</span><span style="color:gainsboro;">:</span>&nbsp;<span style="color:#d69d85;">&#39;True&#39;</span>&nbsp;<span style="color:gainsboro;">});</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">return</span>&nbsp;<span style="color:#569cd6;">this</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">http</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">post</span><span style="color:gainsboro;">(</span><span style="color:#569cd6;">this</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">baseUri</span>&nbsp;<span style="color:#b4b4b4;">+</span>&nbsp;<span style="color:#d69d85;">&#39;ForgotPassword&#39;</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:gainsboro;">body</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:gainsboro;">{</span>&nbsp;<span style="color:gainsboro;">headers</span><span style="color:gainsboro;">:</span>&nbsp;<span style="color:gainsboro;">requestHeader</span>&nbsp;<span style="color:gainsboro;">});</span>
    &nbsp;&nbsp;<span style="color:gainsboro;">}</span>
    <span style="color:gainsboro;">}</span></pre>`;

    appRoutesTsSafe: SafeHtml;
    appRoutesTs: string = `<pre style="font-family:Consolas;font-size:13px;color:#dadada;background:#1e1e1e;"><span style="color:gainsboro;">&nbsp;&nbsp;&nbsp;&nbsp;{</span>&nbsp;<span style="color:gainsboro;">path</span><span style="color:gainsboro;">:</span>&nbsp;<span style="color:#d69d85;">&#39;home&#39;</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:gainsboro;">component</span><span style="color:gainsboro;">:</span>&nbsp;<span style="color:gainsboro;">HomeComponent</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:gainsboro;">canActivate</span><span style="color:gainsboro;">:</span>&nbsp;<span style="color:gainsboro;">[</span><span style="color:gainsboro;">AuthGuard</span><span style="color:gainsboro;">]</span>&nbsp;<span style="color:gainsboro;">},</span>
    &nbsp;&nbsp;<span style="color:gainsboro;">{</span>&nbsp;<span style="color:gainsboro;">path</span><span style="color:gainsboro;">:</span>&nbsp;<span style="color:#d69d85;">&#39;&#39;</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:gainsboro;">component</span><span style="color:gainsboro;">:</span>&nbsp;<span style="color:gainsboro;">HomeComponent</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:gainsboro;">canActivate</span><span style="color:gainsboro;">:</span>&nbsp;<span style="color:gainsboro;">[</span><span style="color:gainsboro;">AuthGuard</span><span style="color:gainsboro;">]</span>&nbsp;<span style="color:gainsboro;">},</span>
    &nbsp;&nbsp;<span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">path</span><span style="color:gainsboro;">:</span>&nbsp;<span style="color:#d69d85;">&#39;user&#39;</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:gainsboro;">component</span><span style="color:gainsboro;">:</span>&nbsp;<span style="color:gainsboro;">UserComponent</span><span style="color:gainsboro;">,</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">children</span><span style="color:gainsboro;">:</span>&nbsp;<span style="color:gainsboro;">[</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>&nbsp;<span style="color:gainsboro;">path</span><span style="color:gainsboro;">:</span>&nbsp;<span style="color:#d69d85;">&#39;register&#39;</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:gainsboro;">component</span><span style="color:gainsboro;">:</span>&nbsp;<span style="color:gainsboro;">RegisterComponent</span>&nbsp;<span style="color:gainsboro;">},</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>&nbsp;<span style="color:gainsboro;">path</span><span style="color:gainsboro;">:</span>&nbsp;<span style="color:#d69d85;">&#39;login&#39;</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:gainsboro;">component</span><span style="color:gainsboro;">:</span>&nbsp;<span style="color:gainsboro;">LoginComponent</span>&nbsp;<span style="color:gainsboro;">}</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">]</span>
    &nbsp;&nbsp;<span style="color:gainsboro;">}</span>
    </pre>`;

    appModule1Safe: SafeHtml;
    appModule1: string = `<pre style="font-family:Consolas;font-size:13px;color:#dadada;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;import</span>&nbsp;<span style="color:gainsboro;">{</span>&nbsp;<span style="color:gainsboro;">HttpClientModule</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:gainsboro;">HTTP_INTERCEPTORS</span>&nbsp;<span style="color:gainsboro;">}</span>&nbsp;<span style="color:#569cd6;">from</span>&nbsp;<span style="color:#d69d85;">&#39;@angular/common/http&#39;</span><span style="color:gainsboro;">;</span>
    <span style="color:#569cd6;">import</span>&nbsp;<span style="color:gainsboro;">{</span>&nbsp;<span style="color:gainsboro;">ReactiveFormsModule</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:gainsboro;">FormsModule</span>&nbsp;<span style="color:gainsboro;">}</span>&nbsp;<span style="color:#569cd6;">from</span>&nbsp;<span style="color:#d69d85;">&#39;@angular/forms&#39;</span><span style="color:gainsboro;">;</span>
    <span style="color:#569cd6;">import</span>&nbsp;<span style="color:gainsboro;">{</span>&nbsp;<span style="color:gainsboro;">ToastrModule</span>&nbsp;<span style="color:gainsboro;">}</span>&nbsp;<span style="color:#569cd6;">from</span>&nbsp;<span style="color:#d69d85;">&#39;ngx-toastr&#39;</span><span style="color:gainsboro;">;</span>
    <span style="color:#569cd6;">import</span>&nbsp;<span style="color:gainsboro;">{</span>&nbsp;<span style="color:gainsboro;">UserService</span>&nbsp;<span style="color:gainsboro;">}</span>&nbsp;<span style="color:#569cd6;">from</span>&nbsp;<span style="color:#d69d85;">&#39;./user/shared/user.service&#39;</span><span style="color:gainsboro;">;</span>
    <span style="color:#569cd6;">import</span>&nbsp;<span style="color:gainsboro;">{</span>&nbsp;<span style="color:gainsboro;">AuthInterceptor</span>&nbsp;<span style="color:gainsboro;">}</span>&nbsp;<span style="color:#569cd6;">from</span>&nbsp;<span style="color:#d69d85;">&#39;./auth/auth.interceptor&#39;</span><span style="color:gainsboro;">;</span>
    </pre>`;

    appModule2Safe: SafeHtml;
    appModule2: string = `<pre style="font-family:Consolas;font-size:13px;color:#dadada;background:#1e1e1e;"><span style="color:gainsboro;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;UserService</span><span style="color:gainsboro;">,</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">provide</span><span style="color:gainsboro;">:</span>&nbsp;<span style="color:gainsboro;">HTTP_INTERCEPTORS</span><span style="color:gainsboro;">,</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">useClass</span><span style="color:gainsboro;">:</span>&nbsp;<span style="color:gainsboro;">AuthInterceptor</span><span style="color:gainsboro;">,</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">multi</span><span style="color:gainsboro;">:</span>&nbsp;<span style="color:#569cd6;">true</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">},</span>
    </pre>`;

    appModule3Safe: SafeHtml;
    appModule3: string = `<pre style="font-family:Consolas;font-size:13px;color:#dadada;background:#1e1e1e;"><span style="color:gainsboro;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HttpClientModule</span><span style="color:gainsboro;">,</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">FormsModule</span><span style="color:gainsboro;">,</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">ReactiveFormsModule</span><span style="color:gainsboro;">,</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">ToastrModule</span><span style="color:gainsboro;">.</span><span style="color:gainsboro;">forRoot</span><span style="color:gainsboro;">({</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">progressAnimation</span><span style="color:gainsboro;">:</span>&nbsp;<span style="color:#d69d85;">&#39;increasing&#39;</span><span style="color:gainsboro;">,</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">progressBar</span><span style="color:gainsboro;">:</span>&nbsp;<span style="color:#569cd6;">true</span><span style="color:gainsboro;">,</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">timeOut</span><span style="color:gainsboro;">:</span>&nbsp;<span style="color:#b5cea8;">1000</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}),</span>
    </pre>`;

    userDetails;
    safeHtml: SafeHtml;
    safeMax: SafeHtml;

}
