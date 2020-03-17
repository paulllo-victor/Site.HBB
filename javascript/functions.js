/*
 * Autor: Jefferson Ricardo / Paulo Victor
 * Versão: 1.0
 * Data de crialçao: 07/07/2020 18:56hs
 * Referência: PAGINAS DE AÇÕES EM JQUEY (JS)
 * Conteúdo: Geral
 * =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Facebook: https://www.facebook.com/jeffersonrmsilva
 * Celular: 81 99668-0318
 *
 * Facebook: https://www.facebook.com/profile.php?id=100004332602666
 * Celular: 81 98657-8987
*/
$('body').css('overflow','hidden');
$(window).on('load',function(){
	$('.container-carregamento').hide();
	$('.wraper').addClass('show');
	$('body').css('overflow','auto');
});

//MENU MOBILE

$(function(){
	///CHAMADA ACOES MENU MOBILE
	abrirMenuMobile();
	fecharMenuMobile();

	var menuMobile = $('.menu-navegacao nav ul');

	function abrirMenuMobile(){
		var buttonMobile = $('.button-mobile');		

		buttonMobile.click(function(){
			menuMobile.addClass('show');
		});
	}
	function fecharMenuMobile(){
		var buttonMobileFechar = $('.close-menu-mobile span');

		buttonMobileFechar.click(function(){
			menuMobile.removeClass('show');
		});
	}	
});
//*******

//BANNER DINAMICO IMAGEM
$(function(){
	var indiceAtual = 0;
	var indiceMaximo = $('.banner-imagem .imagem-single-banner').length;
	var delay = 5000;

	initImagens();
	clicarSlide();

	function initImagens(){
		for(var i = 0; i < indiceMaximo; i++){
			if (i==0){
				$('.overlap .slide-op').append('<span style="background-color:#FC6538"></span>')
			}else{
				$('.overlap .slide-op').append('<span></span>')
			}
		}
		var primeiraImg = $('.banner-imagem .imagem-single-banner').eq(0).fadeIn();
		setInterval(function(){
			alternarImagens();
		},delay);
	}

	function alternarImagens(){
		$('.banner-imagem .imagem-single-banner').eq(indiceAtual).stop().fadeOut(0);
		indiceAtual+=1;
		if(indiceAtual == indiceMaximo){
			indiceAtual = 0;
		}
		$('.overlap .slide-op span').css('background-color','rgba(224,195,165,.4)');
		$('.overlap .slide-op span').eq(indiceAtual).css('background-color','#FC6538');
		$('.banner-imagem .imagem-single-banner').eq(indiceAtual).stop().fadeIn(0);
	}

	function clicarSlide(){
		$('.overlap .slide-op span').click(function(){
			$('.banner-imagem .imagem-single-banner').eq(indiceAtual).stop().fadeOut(0);
			indiceAtual = $(this).index();
			$('.banner-imagem .imagem-single-banner').eq(indiceAtual).stop().fadeIn(0);
			$('.overlap .slide-op span').css('background-color','rgba(224,195,165,.4)');
			$(this).css('background-color','#FC6538');
		});
	}
});

///ABRIR MODAL DE CONTATO

	// $(document).on("click", "[data-toggle='modal']", function (){

	// 	var modal = $(this).data("target");
		
	// 	$(modal).addClass('show');

	// 	if ($(modal).hasClass('show')) {
	// 		$('body').css('overflow','hidden');
	// 	}


	

	// });

	// $(document).on("click", "[data-close='modal']", function () {
		
	// 	var modal = $($(this).parents(".container-modal-formulario")[0]).attr("id"); //Recebe o ID do Modal
		
	// 	$("#"+modal).removeClass('show');

	// 	if ($(modal).hasClass('show')) {
	// 		$('body').css('overflow','hidden');
	// 	}
	// 	else{
	// 		$('body').css('overflow','auto');
	// 	}

	// });
	// $('body').click(function(){
	// 	var modalFormulario = $('.container-modal-formulario');
	// 	modalFormulario.removeClass('show');
	// 	if(modalFormulario.hasClass('show')){
	// 		$('body').css('overflow','hidden');
	// 	}else{
	// 		$('body').css('overflow','auto');
	// 	}
	// });
	// $('.modal-formulario').click(function(e){
	// 	e.stopPropagation();
	// });
$(function(){


	var modalFormulario = $('.container-modal-formulario');

	$('.open-modal').click(function(e){
		e.stopPropagation();
		modalFormulario.fadeIn();
		modalFormulario.addClass('show');

		if(modalFormulario.hasClass('show')){
			$('body').css('overflow','hidden');
		}else{
			$('body').css('overflow','auto');
		}
	});

	$('.modal-formulario').click(function(e){
		e.stopPropagation();
	});

	$('body , [data-close=modal]').click(function(){
		modalFormulario.fadeOut();
		modalFormulario.removeClass('show');

		if(modalFormulario.hasClass('show')){
			$('body').css('overflow','hidden');
		}else{
			$('body').css('overflow','auto');
		}
	});

})


///************///

// MENU FIXO
$(function(){
	$(window).scroll(function(){
		var windowOffy = $(window).scrollTop();

		if(windowOffy >= 50){
			$('header').addClass('fixedTop');
			$('header').fadeIn();
		}else{

			
			$('header').removeClass('fixedTop');
			$('header').fadeIn();
		}
	})
})
$(function(){
	$('nav a').click(function(){
		var href = $(this).attr('href');
		var offSetTop = $(href).offset().top;
		$('html,body').animate({
			'scrollTop':offSetTop
		})
		return false;
	})
})
///************///

// ALTERA BARRINHA DO MENU POR SESSÃO
$(function(){
	$(window).scroll(function(){
		$('section').each(function(){
			//distancia do top para onde a barra de rolangem está
			var windowOffy = $(window).scrollTop();
			//tamanho da janela
			var windowHeight = $(window).height();
			//
			var eloOffy = $(this).offset().top;

			if(eloOffy+400 < (windowHeight + windowOffy) && (eloOffy+400+$(this).height() > windowOffy)){
				$('a').css('border','0');
				var target = $(this).attr('target');
				$('.' + target).css('border-bottom','2px solid #FC6538')
			}
		})
	})
})
///************///

///MODAL PRODUTOS DESTAQUES
$(function(){
	var containerModalProdutos = $('.cotainer-modal-produto');

	$('.vitrine-produtos .produto-single').click(function(){
		var target = $(this).attr('target');
		$(target).fadeIn();
	});
	$('[data-close=modal]').click(function(){
		var modal = $($(this).parents('.cotainer-modal-produto')[0]).attr('id');
		$('#'+modal).fadeOut();
	})
});
///************///
///EFEITO MODAL PRODUTOS DESTAQUES
$(function(){
	$('.produto-single').hover(function(){
		var nome = $(this).attr('nome');
		$('.'+nome).slideDown();
	})
	$('.produto-single').mouseleave(function(){
		var nome = $(this).attr('nome');
		$('.'+nome).fadeOut();
	})
})
///************///